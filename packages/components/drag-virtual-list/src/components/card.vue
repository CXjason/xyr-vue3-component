<script lang="ts" setup>
import { computed, ref, unref, watch } from "vue";
import { useDrag, useDrop } from "vue3-dnd";
import { toRefs } from "@vueuse/core";
//import { ElCheckbox } from '../../../checkbox'
import { ItemTypes } from "./types/itemTypes";
import {
  CHECKED_CHANGE_EVENT,
  MOVE_EVENT,
  MoveModeType,
  cardProps,
  dragVirtualListEmits
} from "./card";
import type { VNode } from "vue";
import type { Identifier } from "dnd-core";
import { ElCheckbox, CheckboxValueType } from "element-plus";
import { Top, Bottom } from "@element-plus/icons-vue";
import { ElIcon } from "element-plus";
import { usePropsAlias } from "../composables/use-props-alias";

const props = defineProps(cardProps);
const emits = defineEmits(dragVirtualListEmits);

const propsAlias = usePropsAlias(props);

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const OptionContent = ({ option }: { option?: VNode | VNode[] }) => option;

const cardRefs = ref<HTMLDivElement>();
const isChecked = ref(props.checked);
const [dropCollect, drop] = useDrop<
  DragItem,
  void,
  { handlerId: Identifier | null }
>({
  accept: ItemTypes.CARD,
  collect(monitor) {
    return {
      handlerId: monitor.getHandlerId()
    };
  },
  hover(item: DragItem, monitor) {
    if (!cardRefs.value) {
      return;
    }

    const firstIndex = props.dataList[0]["index"];

    const dragItm = props.dataList.find(
      (dataItem: any) => item.id === dataItem.data[propsAlias.value.key]
    );

    const dragIndex = dragItm ? (dragItm as any).index : null;

    const hoverIndex = props.index + firstIndex;

    //console.log(props.dataList);

    // console.log(item)
    // console.log(dragIndex, hoverIndex)

    // Don't replace items with themselves

    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    // const hoverBoundingRect = card.value?.getBoundingClientRect();

    // // Get vertical middle
    // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // // Determine mouse position
    // const clientOffset = monitor.getClientOffset();

    // // Get pixels to the top
    // const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    //   return;
    // }

    // // Dragging upwards
    // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    //   return;
    // }

    // Time to actually perform the action
    props.moveCard && props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    item.index = hoverIndex;
  }
  //drop(item, monitor) {},
});

const [collect, drag] = useDrag({
  type: ItemTypes.CARD,
  item: () => {
    return props.item;
  },
  collect: (monitor: any) => ({
    isDragging: monitor.isDragging()
  })
});

const { handlerId } = toRefs(dropCollect);
const { isDragging } = toRefs(collect);
const opacity = computed(() => (unref(isDragging) ? 0 : 1));

const setRef = (el: HTMLDivElement) => {
  cardRefs.value = drag(drop(el)) as HTMLDivElement;
  return undefined;
};

function checkChange(val: CheckboxValueType): void {
  emits(CHECKED_CHANGE_EVENT, val);
}

// 上移
function moveTop(mode: MoveModeType) {
  emits(MOVE_EVENT, mode, props.item[propsAlias.value.key]);
}

watch(
  () => props.checked,
  nVal => {
    isChecked.value = nVal;
  },
  { immediate: true }
);
</script>

<template>
  <div
    :ref="(el: HTMLDivElement) => setRef(el)"
    class="ej-drag-virtual-list-card"
    :style="{ opacity: index === props.index ? opacity : 1 }"
    :data-handler-id="handlerId"
  >
    <div v-if="isShowSn" class="ej-drag-virtual-list-card-num">
      ({{ index + 1 }})
    </div>
    <div class="ej-drag-virtual-list-card-option">
      <div class="ej-drag-virtual-list-card-checkbox-wr" v-if="isShowCheckbox">
        <el-checkbox v-model="isChecked" @change="checkChange"></el-checkbox>
      </div>
      <div class="ej-drag-virtual-list-card-option-content">
        <option-content
          :option="optionRender?.(item)"
          class="ej-drag-virtual-list-card-text"
        />
      </div>
    </div>
    <div class="ej-drag-virtual-list-card-func" v-show="isShowFunc">
      <el-icon
        class="ej-drag-virtual-list-card-func-item"
        @click="moveTop('up')"
        ><Top style="width: 20px; cursor: pointer"
      /></el-icon>
      <el-icon
        class="ej-drag-virtual-list-card-func-item"
        @click="moveTop('down')"
        ><Bottom style="width: 20px; cursor: pointer"
      /></el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../../style/base" as *;

.ej-drag-virtual-list-card {
  display: flex;
  align-items: center;
  position: relative;

  .ej-drag-virtual-list-card-text {
    cursor: move;
    &:hover {
      color: $color-primary;
    }
  }

  .ej-drag-virtual-list-card-num {
    padding: 0 4px;
  }

  .ej-drag-virtual-list-card-option {
    display: flex;
    align-items: center;

    .ej-drag-virtual-list-card-checkbox-wr {
      margin-right: 4px;
    }
  }

  .ej-drag-virtual-list-card-func {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: end;

    .ej-drag-virtual-list-card-func-item {
      margin-left: 8px;

      &:hover {
        color: $color-primary;
      }
    }
  }
}
</style>
