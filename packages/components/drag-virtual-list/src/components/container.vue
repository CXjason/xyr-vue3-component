<script lang="ts" setup>
import { computed, h, ref, useSlots, watch } from "vue";
import { useVirtualList } from "@vueuse/core";
import { cloneDeep } from "lodash-unified";
import { dragVirtualListProps } from "../drag-virtual-list.js";
import { usePropsAlias } from "../composables/use-props-alias";
import Card from "./card.vue";
import type { DragVirtualListDataItem } from "../drag-virtual-list.js";
import {
  ElCheckbox,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElIcon
} from "element-plus";
import { Setting } from "@element-plus/icons-vue";
import { MoveModeType } from "./card.js";

const props = defineProps(dragVirtualListProps);
const emits = defineEmits(["update:data", "change"]);
const slots = useSlots();

console.log(props);

// 列表数据
const dataList = ref(cloneDeep(props.data));
// 是否选中全选
let allChecked = ref(false);
// 选中的数据
let checkedData = ref<any[]>([]);
// 是否显示操作栏
let isShowCardFunc = ref(false);
// 移动步长
let moveStep = ref(1);
watch(
  () => props.data,
  nVal => {
    dataList.value = cloneDeep(nVal);
  },
  {
    deep: true,
    immediate: true
  }
);

watch(
  dataList,
  nVal => {
    emits("change", nVal);
  },
  {
    deep: true
  }
);

const propsAlias = usePropsAlias(props);
const overscan = 1;
const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
  dataList,
  {
    itemHeight: 40,
    overscan // 可选：预渲染的额外项数
  }
);

const moveCard = (dragIndex: number, hoverIndex: number) => {
  const dragItem = dataList.value[dragIndex];
  const newList = [...dataList.value];
  newList.splice(dragIndex, 1);
  newList.splice(hoverIndex, 0, dragItem);
  dataList.value = newList;
};

const optionRender = computed(() => (option: DragVirtualListDataItem) => {
  if (props.renderContent) return props.renderContent(h, option);

  if (slots.default) return slots.default({ option });

  return h(
    "span",
    option[propsAlias.value.label] || option[propsAlias.value.key]
  );
});

function checkChangeFn(val: any, key: any) {
  console.log(val);
  console.log(key);

  if (val) {
    checkedData.value.push(key);
  } else {
    checkedData.value = checkedData.value.filter(item => {
      return item !== key;
    });
    console.log(checkedData.value);
  }
}

function allCheckChange(val: any) {
  checkedData.value = val
    ? dataList.value.map(item => item[propsAlias.value.key])
    : [];
}

function handleCommand(command: any) {
  if (command === "card_opera") {
    isShowCardFunc.value = !isShowCardFunc.value;
  }
}

// 移动
function moveFn(mode: MoveModeType, key: any) {
  const dragIndex = dataList.value.findIndex(
    dataItem => key === dataItem[propsAlias.value.key]
  );

  if (dragIndex === -1) {
    return;
  }

  let hoverIndex: number;
  const lastIndex = dataList.value.length - 1;
  if (mode === "down") {
    hoverIndex = dragIndex + moveStep.value;

    if (hoverIndex >= lastIndex) {
      hoverIndex = lastIndex;
    }
  } else {
    hoverIndex = dragIndex - moveStep.value;
    if (hoverIndex < 0) {
      hoverIndex = 0;
    }
  }

  moveCard(dragIndex, hoverIndex);

  let diff = hoverIndex - dragIndex;
  let targetIndex = list.value[0].index + diff + (overscan - 1);

  if (targetIndex < 0) {
    targetIndex = 0;
  }
  if (targetIndex > lastIndex) {
    targetIndex = lastIndex;
  }

  scrollTo(targetIndex);
}

// 生成 选中数和总数
let summaryCompu = computed(() => {
  let retVal = `${dataList.value.length}`;

  if (props.isShowCheckbox) {
    retVal = `${checkedData.value.length}/${retVal}`;
  }

  return retVal;
});

// 判断是否选中
let isCheckedCompu = computed(() => {
  return (key: any) => checkedData.value.includes(key);
});

// 获取数据
function getList() {
  return dataList.value;
}

defineExpose({
  getList
});
</script>

<template>
  <div class="ej-drag-virtual-list-box" style="width: 400px">
    <div class="ej-drag-virtual-list-box-hander">
      <div class="ej-drag-virtual-list-box-hander-left">
        <div class="ej-drag-virtual-list-box-hander-left-allcheckbox">
          <el-checkbox
            v-if="isShowCheckbox"
            v-model="allChecked"
            @change="allCheckChange"
          >
            <template #default>{{ title }}</template>
          </el-checkbox>
          <div v-else>
            {{ title }}
          </div>
        </div>
      </div>
      <div class="ej-drag-virtual-list-box-hander-right">
        <div
          class="ej-drag-virtual-list-box-hander-right-item ej-drag-virtual-list-box-hander-right-setting"
        >
          <el-dropdown placement="top-start" @command="handleCommand">
            <el-icon class="no-focus-visible"
              ><Setting style="width: 20px"
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="card_opera"
                  >{{
                    isShowCardFunc ? "隐藏" : "显示"
                  }}列表操作</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div
          class="ej-drag-virtual-list-box-hander-right-item ej-drag-virtual-list-box-hander-right-summary"
        >
          {{ summaryCompu }}
        </div>
      </div>
    </div>
    <div
      class="ej-drag-virtual-list-box-content"
      v-bind="containerProps"
      style="height: 300px"
    >
      <div v-bind="wrapperProps">
        <Card
          v-for="(item, index) in list"
          class="ej-drag-virtual-list-box-content-list-item"
          :id="item.data[propsAlias.key]"
          :key="item.data[propsAlias.key]"
          :item="item.data"
          :text="item.data[propsAlias.label]"
          :props="propsAlias"
          :index="index"
          :data-list="list"
          :move-card="moveCard"
          :option-render="optionRender"
          :isShowCheckbox="isShowCheckbox"
          :checked="isCheckedCompu(item.data[propsAlias.key])"
          :isShowFunc="isShowCardFunc"
          style="height: 40px; box-sizing: border-box"
          @checked-change="val => checkChangeFn(val, item.data[propsAlias.key])"
          @move-event="moveFn"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ej-drag-virtual-list-box {
  .ej-drag-virtual-list-box-hander {
    height: 50px;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .ej-drag-virtual-list-box-hander-left {
      .ej-drag-virtual-list-box-hander-left-allcheckbox {
        padding-left: 10px;
      }
    }

    .ej-drag-virtual-list-box-hander-right {
      padding-right: 10px;
      display: flex;
      align-items: center;

      .ej-drag-virtual-list-box-hander-right-item {
        margin-left: 10px;

        &.ej-drag-virtual-list-box-hander-right-setting {
          cursor: pointer;
          display: flex;
        }
      }
    }
  }

  .ej-drag-virtual-list-box-content {
    border: 1px solid #eee;
    border-top: none;
    .ej-drag-virtual-list-box-content-list-item {
      padding-left: 10px;
    }
  }
}
</style>
