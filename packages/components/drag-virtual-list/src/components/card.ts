import {
  type DragVirtualListDataItem,
  dragVirtualListProps
} from "../drag-virtual-list";
import type { VNode } from "vue";
import { CheckboxValueType } from "element-plus";

export const CHECKED_CHANGE_EVENT = "checked-change";
export const MOVE_EVENT = "move-event";
export type MoveModeType = "up" | "down";

export const cardProps = {
  optionRender: {
    type: Function
  },
  dataList: dragVirtualListProps.data,
  text: {
    type: String,
    default: ""
  },
  index: {
    type: Number,
    default: -1
  },
  item: {
    type: Object,
    default: () => {}
  },
  moveCard: {
    // 移动回调 dragIndex： 拖拽的下标， hoverIndex：移动到的位置
    type: Function
  },
  props: dragVirtualListProps.props,
  checked: {
    // 是否选中
    type: Boolean,
    default: false
  },
  isShowCheckbox: dragVirtualListProps.isShowCheckbox,
  isShowSn: {
    // 是否显示序号
    type: Boolean,
    default: false
  },
  isShowFunc: {
    // 是否宣誓功能
    type: Boolean,
    default: false
  }
};

export const checkedChangeFn = (val: CheckboxValueType) => {
  return true;
};

export const dragVirtualListEmits = {
  [CHECKED_CHANGE_EVENT]: checkedChangeFn,
  [MOVE_EVENT]: (mode: MoveModeType, key: any) => true
};
