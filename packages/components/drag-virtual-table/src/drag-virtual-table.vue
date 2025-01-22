<script setup lang="ts">
import { nextTick, ref, watch, useSlots, computed, reactive, h } from "vue";
import Sortable, { SortableEvent } from "sortablejs";
import { dragVirtualTableProps } from "./drag-virtual-table";
import "vxe-table/lib/style.css";
import { VxeUI } from "vxe-pc-ui";
import { VxeGrid, VxeGridPropTypes, VxeToolbar } from "vxe-table";
import { Menu } from "@element-plus/icons-vue";
import { ElIcon, ElInputNumber } from "element-plus";

import "element-plus/es/components/input-number/style/css";
import "../style/index.scss";
import { cloneDeep } from "lodash-unified";
import { getUuid } from "../../../utils/functions";
import $ from "jquery";
import TableBar from "../../table-bar";

VxeUI.component(VxeToolbar);

defineOptions({
  name: "xyrDragVirtualTable"
});

const props = defineProps(dragVirtualTableProps);
const emits = defineEmits(["refresh"]);
const slots = useSlots();

const tableData = ref<any>([]);

const vxeTableRef = ref();

let vxeGridKey = ref(getUuid());

const domId = "JvDragVirtualTable_" + getUuid();

let sortNum = reactive({
  num: 0,
  orgNum: 0,
  currentKey: ""
});
let sortNumInputRef = ref();

let oldId = "";
let oldItem = {};
let dragItemDom;
let dragItemHtml: string;
let moveHtmlData: any = [];
const rowDrop = (event: { preventDefault: () => void }) => {
  event.preventDefault();
  nextTick(() => {
    const wrapper: HTMLElement = document.querySelector(
      ".vxe-table--body tbody"
    ) as HTMLElement;

    Sortable.create(wrapper, {
      animation: 300,
      handle: ".drag-btn",
      forceFallback: false,
      ghostClass: "sortable-ghost", // drop placeholder的css类名
      onStart: (evt: any) => {
        let currentList = vxeTableRef.value.getTableData().tableData;
        let oldItem = currentList[evt.oldIndex];

        oldId = oldItem.id;

        dragItemDom = evt.item;

        //dragItemHtml = $(dragItemDom).prop("outerHTML");
        dragItemHtml = $(dragItemDom).html();

        console.log(oldItem._X_ROW_KEY);

        $(`.${domId} [rowid=${oldItem._X_ROW_KEY}]`).remove();
      },
      onMove: function (/**Event*/ evt, /**Event*/ originalEvent) {
        // let id = getUuid();
        // $(`.${domId} .sortable-ghost`).attr("jid", id);
        // let orgHtml = $(`.${domId} .sortable-ghost`).prop("outerHTML");

        // _X_ROW_KEY

        $(`.${domId} .temp_tr`).remove();

        let oDiv = $(`<tr class="temp_tr">${dragItemHtml}</tr>`);
        oDiv.css({
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#fff"
        });

        $(`.${domId} .sortable-ghost`)
          .css({ position: "relative" })
          .append(oDiv);

        //$(`.${domId} .sortable-ghost`).html(dragItemHtml);

        // let curHtml = $(`.${domId} .sortable-ghost`).prop("outerHTML");

        // moveHtmlData.push({
        //   id,
        //   orgHtml,
        //   curHtml,
        // });
      },
      onEnd: ({ newIndex }: SortableEvent): void => {
        $(`.${domId} .temp_tr`).remove();
        moveFn(newIndex);
        moveHtmlData = [];
      },
      onChange: (evt: SortableEvent) => {
        //console.log(evt);
        //moveFn(newIndex);
        // console.log(moveHtmlData);
        // if (moveHtmlData.length > 1) {
        //   for (let i = 0; i < moveHtmlData.length - 2; i++) {
        //     if (moveHtmlData.length <= 1) {
        //       break;
        //     }
        //     let item = moveHtmlData[i];
        //     console.log($(`.${domId} [jid=${item.id}]`).length);
        //     $(`.${domId} [jid=${item.id}]`).html(item.orgHtml);
        //     $(`.${domId} [jid=${item.id}]`).children().eq(0).unwrap();
        //     moveHtmlData.splice(i, 1);
        //     i--;
        //   }
        // }
      }
      // onChoose: function (/**Event*/ evt) {
      //   console.log(evt);

      //   evt.oldIndex; // element index within parent
      // },
      // setData: function (
      //   /** DataTransfer */ dataTransfer,
      //   /** HTMLElement*/ dragEl
      // ) {
      //   console.log(dataTransfer);

      //   dataTransfer.setData("Text", dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
      // },
    });
  });
};

function moveFn(newIndex: number | undefined) {
  if (!newIndex) {
    return;
  }

  let currentList = vxeTableRef.value.getTableData().tableData;
  let newId = newIndex ? currentList[newIndex].id : "";

  let allOldIndex = -1;
  let allNewIndex = -1;

  console.log(tableData);

  for (let i = 0; i < tableData.value.length; i++) {
    let item = tableData.value[i];
    if (item.id == oldId) {
      allOldIndex = i;
    }

    if (item.id == newId) {
      allNewIndex = i;
    }

    if (allOldIndex != -1 && allNewIndex != -1) {
      break;
    }
  }

  console.log(allOldIndex, allNewIndex);

  moveTo(allOldIndex, allNewIndex);

  vxeTableRef.value.reloadData(tableData.value);

  // let scrollData = vxeTableRef.value.getScroll();
  // console.log(scrollData);

  // vxeTableRef.value.reloadData([]);

  // vxeGridKey.value = "";

  // nextTick(() => {
  //   //vxeTableRef.value.reloadData(tableData.value);
  //   setTimeout(() => {
  //     vxeGridKey.value = getUuid();
  //   }, 50);

  //   setTimeout(() => {
  //     vxeTableRef.value.reloadData(cloneDeep(tableData.value));
  //     vxeTableRef.value.scrollTo(scrollData.scrollLeft, scrollData.scrollTop);
  //   }, 150);
  // });

  console.log(tableData.value);
}

// 将某一项放到指定位置
function moveTo(orgIndex, toIndex) {
  const currentRow = tableData.value.splice(orgIndex, 1)[0];
  tableData.value.splice(toIndex, 0, currentRow);
}

watch(
  () => props.data,
  nVal => {
    tableData.value = cloneDeep(nVal) || [];
  },
  {
    deep: true,
    immediate: true
  }
);

const tableColumns = computed(() => {
  let columns = cloneDeep(props.columns) as VxeGridPropTypes.Columns;

  // 是否可以输入序号排序
  if (props.isNumSort) {
    // 判断是否设置了 序号列 有则修改 没有则直接加
    let isHav = false;
    columns = columns.map(item => {
      if (item.type === "seq") {
        isHav = true;
        let slots = Object.assign(item?.slots || {}, {
          default: "seq_default"
        });
        item.width =
          !item.width || parseInt(item.width as string) < 80 ? 80 : item.width;

        item.slots = slots;
      }
      return item;
    });

    if (!isHav) {
      columns.unshift({
        //type: "seq",
        field: "sort_num",
        title: "序号",
        width: 80,
        slots: {
          default: "sort_num_default"
        }
      });
    }
  }

  // 如果支持拖拽则添加拖拽列
  if (props.dragSlot) {
    columns.unshift({
      field: "drag",
      title: "",
      width: 40,
      slots: { default: "drag" },
      align: "center"
    });
  }

  return columns;
});

function onRefresh() {
  emits("refresh");
}

function sortNumChange() {
  sortNum.currentKey = "";
  let { orgNum, num } = sortNum;
  moveTo(orgNum - 1, num - 1);

  vxeTableRef.value.reloadData(tableData.value);
}

function sortNumClick(id, index) {
  sortNum.currentKey = id;
  sortNum.num = index + 1;
  sortNum.orgNum = index + 1;

  nextTick(() => {
    sortNumInputRef?.value.focus();
  });
}

const indexHtmlComp = computed(() => {
  return index => {
    return `<div>
              ${index + "&nbsp;"}
            </div>`;
  };
});
</script>

<template>
  <TableBar
    :vxeTableRef="vxeTableRef"
    :columns="tableColumns"
    :isHeader="isHeader"
    title=""
    @refresh="onRefresh"
  >
    <template v-slot="{ size, dynamicColumns }">
      <vxe-grid
        class="jv-drag-virtual-table"
        v-if="vxeGridKey"
        :class="[domId]"
        ref="vxeTableRef"
        :size="size"
        :="$attrs"
        :data="tableData"
        :columns="dynamicColumns"
      >
        <template v-for="(_, name) in slots" #[name]="slotProps">
          <slot :name="name" :="slotProps"></slot>
        </template>
        <template #drag>
          <div class="jv-drag-virtual-table_name_box">
            <el-icon class="jv-drag-virtual-table_name_box_drag_icon"
              ><Menu class="drag-btn" @mouseenter="rowDrop" style="width: 20px"
            /></el-icon>
          </div>
        </template>

        <template v-if="isNumSort" #sort_num_default="{ row, rowIndex }">
          <div @click="sortNumClick(row.id, rowIndex)">
            <div v-if="sortNum.currentKey && sortNum.currentKey === row.id">
              <el-input-number
                ref="sortNumInputRef"
                v-model="sortNum.num"
                :controls="false"
                size="small"
                :min="1"
                :max="tableData.length"
                style="width: 100%"
                @blur="sortNumChange"
              />
            </div>
            <div v-else>
              <div v-html="indexHtmlComp(rowIndex + 1)"></div>
            </div>
          </div>
        </template>
      </vxe-grid>
    </template>
  </TableBar>
</template>
