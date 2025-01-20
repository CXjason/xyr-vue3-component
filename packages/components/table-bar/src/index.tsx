import Sortable, { SortableEvent } from "sortablejs";
import { delay, cloneDeep, getKeyList } from "@pureadmin/utils";
import {
  type PropType,
  ref,
  unref,
  computed,
  nextTick,
  defineComponent,
  getCurrentInstance
} from "vue";

import {
  Menu as DragIcon,
  Refresh as RefreshIcon,
  Expand as ExpandIcon,
  Setting as SettingIcon,
  Fold as CollapseIcon
} from "@element-plus/icons-vue";

import "element-plus/es/components/dropdown/style/css";
import "element-plus/es/components/checkbox/style/css";
import "element-plus/es/components/popover/style/css";
import "element-plus/es/components/divider/style/css";
import "element-plus/es/components/scrollbar/style/css";
import "element-plus/es/components/checkbox-group/style/css";
import "element-plus/es/components/space/style/css";
import "element-plus/es/components/button/style/css";
import "../style/index.scss";

// import DragIcon from "../../assets/table-bar/drag.svg";
// import ExpandIcon from "../../assets/table-bar/expand.svg";
// import RefreshIcon from "../../assets/table-bar/refresh.svg";
// import SettingIcon from "../../assets/table-bar/settings.svg";
// import CollapseIcon from "../../assets/table-bar/collapse.svg";

import {
  ElCheckbox,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElDivider,
  ElPopover,
  ElScrollbar,
  ElCheckboxGroup,
  ElSpace,
  ElIcon,
  ElButton
} from "element-plus";

const props = {
  /** 头部最左边的标题 */
  title: {
    type: String,
    default: "列表"
  },
  vxeTableRef: {
    type: Object as PropType<any>
  },
  /** 需要展示的列 */
  columns: {
    type: Array as PropType<any>,
    default: () => []
  },
  /** 是否为树列表 */
  tree: {
    type: Boolean,
    default: false
  },
  isExpandAll: {
    type: Boolean,
    default: true
  },
  tableKey: {
    type: [String, Number] as PropType<string | number>,
    default: "0"
  },
  isHeader: {
    type: Boolean,
    default: true
  }
};

export default defineComponent({
  name: "VxeTableBar",
  components: {
    "el-dropdown": ElDropdown,
    "el-dropdown-menu": ElDropdownMenu,
    "el-dropdown-item": ElDropdownItem,
    "el-divider": ElDivider,
    "el-popover": ElPopover,
    "el-checkbox": ElCheckbox,
    "el-scrollbar": ElScrollbar,
    "el-checkbox-group": ElCheckboxGroup,
    "el-space": ElSpace,
    "el-icon": ElIcon,
    "el-button": ElButton
  },
  props,
  emits: ["refresh"],
  setup(props, { emit, slots, attrs }) {
    const size = ref("small");
    const loading = ref(false);
    const checkAll = ref(true);
    const isIndeterminate = ref(false);
    const instance = getCurrentInstance()!;
    const isExpandAll = ref(props.isExpandAll);
    let checkColumnList = getKeyList(cloneDeep(props?.columns), "title");
    const checkedColumns = ref(getKeyList(cloneDeep(props?.columns), "title"));
    const dynamicColumns = ref(cloneDeep(props?.columns));

    const getDropdownItemStyle = computed(() => {
      return (s: any) => {
        return {
          background: s === size.value ? "#409eff" : "",
          color: s === size.value ? "#fff" : "var(--el-text-color-primary)"
        };
      };
    });

    function onReFresh() {
      loading.value = true;
      emit("refresh");
      delay(500).then(() => (loading.value = false));
    }

    function onExpand() {
      isExpandAll.value = !isExpandAll.value;
      isExpandAll.value
        ? props.vxeTableRef.setAllTreeExpand(true)
        : props.vxeTableRef.clearTreeExpand();
      props.vxeTableRef.refreshColumn();
    }

    function reloadColumn() {
      const curCheckedColumns = cloneDeep(dynamicColumns.value).filter(
        (item: any) => checkedColumns.value.includes(item.title)
      );
      props.vxeTableRef.reloadColumn(curCheckedColumns);
    }

    function handleCheckAllChange(val: boolean) {
      checkedColumns.value = val ? checkColumnList : [];
      isIndeterminate.value = false;
      reloadColumn();
    }

    function handleCheckedColumnsChange(value: string[]) {
      checkedColumns.value = value;
      const checkedCount = value.length;
      checkAll.value = checkedCount === checkColumnList.length;
      isIndeterminate.value =
        checkedCount > 0 && checkedCount < checkColumnList.length;
    }

    async function onReset() {
      checkAll.value = true;
      isIndeterminate.value = false;
      dynamicColumns.value = cloneDeep(props?.columns);
      checkColumnList = [];
      checkColumnList = await getKeyList(cloneDeep(props?.columns), "title");
      checkedColumns.value = getKeyList(cloneDeep(props?.columns), "title");
      props.vxeTableRef.refreshColumn();
    }

    function changeSize(curSize: string) {
      size.value = curSize;
      props.vxeTableRef.refreshColumn();
    }

    const dropdown = {
      dropdown: () => (
        <el-dropdown-menu class="translation">
          <el-dropdown-item
            style={getDropdownItemStyle.value("medium")}
            onClick={() => changeSize("medium")}
          >
            宽松
          </el-dropdown-item>
          <el-dropdown-item
            style={getDropdownItemStyle.value("small")}
            onClick={() => changeSize("small")}
          >
            默认
          </el-dropdown-item>
          <el-dropdown-item
            style={getDropdownItemStyle.value("mini")}
            onClick={() => changeSize("mini")}
          >
            紧凑
          </el-dropdown-item>
        </el-dropdown-menu>
      )
    };

    /** 列展示拖拽排序 */
    const rowDrop = (event: { preventDefault: () => void }) => {
      event.preventDefault();
      nextTick(() => {
        const wrapper: HTMLElement = (
          instance?.proxy?.$refs[`VxeGroupRef${unref(props.tableKey)}`] as any
        ).$el.firstElementChild;
        Sortable.create(wrapper, {
          animation: 300,
          handle: ".drag-btn",
          onEnd: ({ newIndex, oldIndex, item }: SortableEvent) => {
            if (!newIndex || !oldIndex) return;

            const targetThElem = item;
            const wrapperElem = targetThElem.parentNode as HTMLElement;
            const oldColumn = dynamicColumns.value[oldIndex];
            const newColumn = dynamicColumns.value[newIndex];
            if (oldColumn?.fixed || newColumn?.fixed) {
              // 当前列存在fixed属性 则不可拖拽
              const oldThElem = wrapperElem.children[oldIndex] as HTMLElement;
              if (newIndex > oldIndex) {
                wrapperElem.insertBefore(targetThElem, oldThElem);
              } else {
                wrapperElem.insertBefore(
                  targetThElem,
                  oldThElem ? oldThElem.nextElementSibling : oldThElem
                );
              }
              return;
            }
            const currentRow = dynamicColumns.value.splice(oldIndex, 1)[0];
            dynamicColumns.value.splice(newIndex, 0, currentRow);
            reloadColumn();
          }
        });
      });
    };

    const isFixedColumn = (title: string) => {
      return dynamicColumns.value[0].fixed ? true : false;
    };

    const rendTippyProps = (content: string) => {
      // https://vue-tippy.netlify.app/props
      return {
        content,
        offset: [0, 18],
        duration: [300, 0],
        followCursor: true,
        hideOnClick: "toggle"
      };
    };

    const reference = {
      reference: () => (
        <el-icon>
          <SettingIcon
            class={["w-[16px]", "jv-table-bar-box-icon"]}
            style="width: 20px;"
          />
        </el-icon>
      )
    };

    return () => (
      <>
        <div {...attrs} class="jv-table-bar-box">
          <div class="jv-table-bar-header" v-if={props.isHeader}>
            {slots?.title ? (
              slots.title()
            ) : (
              <p class="jv-table-bar-header-title">{props.title}</p>
            )}
            <div class="jv-table-bar-header-right">
              {slots?.buttons ? (
                <div class="jv-table-bar-header-right-btn-slot">
                  {slots.buttons()}
                </div>
              ) : null}
              {props.tree ? (
                <>
                  <el-icon>
                    <ExpandIcon
                      class={["w-[16px]", "jv-table-bar-box-icon"]}
                      style={{
                        transform: isExpandAll.value
                          ? "none"
                          : "rotate(-90deg)",
                        width: "20px"
                      }}
                      onClick={() => onExpand()}
                    />
                  </el-icon>

                  <el-divider direction="vertical" />
                </>
              ) : null}
              <el-icon>
                <RefreshIcon
                  class="jv-table-bar-box-icon"
                  onClick={() => onReFresh()}
                />
              </el-icon>

              <el-divider direction="vertical" />
              <el-dropdown v-slots={dropdown} trigger="click">
                <el-icon>
                  <CollapseIcon class="jv-table-bar-box-icon" />
                </el-icon>
              </el-dropdown>
              <el-divider direction="vertical" />

              <el-popover
                v-slots={reference}
                placement="bottom-start"
                popper-style={{ padding: 0 }}
                width="200"
                trigger="click"
              >
                <div class="jv-table-bar-box-top">
                  <el-checkbox
                    style="margin-right: 0;"
                    label="列展示"
                    v-model={checkAll.value}
                    indeterminate={isIndeterminate.value}
                    onChange={value => handleCheckAllChange(value)}
                  />
                  <el-button type="primary" link onClick={() => onReset()}>
                    重置
                  </el-button>
                </div>

                <div class="jv-table-bar-box-col-list">
                  <el-scrollbar max-height="36vh">
                    <el-checkbox-group
                      ref={`VxeGroupRef${unref(props.tableKey)}`}
                      modelValue={checkedColumns.value}
                      onChange={value => handleCheckedColumnsChange(value)}
                    >
                      <el-space
                        direction="vertical"
                        alignment="flex-start"
                        size={0}
                      >
                        {checkColumnList.map((item, index) => {
                          return (
                            <div class="jv-table-bar-box-col-list-item">
                              <el-icon>
                                <DragIcon
                                  class="jv-table-bar-box-col-list-item-dragicon"
                                  onMouseenter={(event: {
                                    preventDefault: () => void;
                                  }) => rowDrop(event)}
                                />
                              </el-icon>

                              <el-checkbox
                                key={index}
                                label={item}
                                value={item}
                                onChange={reloadColumn}
                              >
                                <span
                                  title={item}
                                  class="jv-table-bar-box-col-list-item-label"
                                >
                                  {item}
                                </span>
                              </el-checkbox>
                            </div>
                          );
                        })}
                      </el-space>
                    </el-checkbox-group>
                  </el-scrollbar>
                </div>
              </el-popover>
            </div>
          </div>
          {slots.default?.({
            size: size.value,
            dynamicColumns: dynamicColumns.value
          })}
        </div>
      </>
    );
  }
});
