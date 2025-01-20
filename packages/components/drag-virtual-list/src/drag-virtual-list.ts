import type { ExtractPropTypes } from "vue";

export type DragVirtualListDataItem = Record<string, any>;

export type ListSortKey = string | number;

export interface DragVirtualListPropsAlias {
  label?: string;
  key?: string;
  disabled?: string;
}

export const dragVirtualListProps = {
  data: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  props: {
    type: Object,
    default: () => ({
      label: "label",
      key: "key",
      disabled: "disabled"
    })
  },
  filterMethod: {
    type: Function
  },
  renderContent: {
    type: Function
  },
  title: {
    type: String,
    default: "List"
  },
  isShowCheckbox: {
    type: Boolean,
    default: false
  }
};

export interface ListSortCheckedState {
  leftChecked: ListSortKey[];
  rightChecked: ListSortKey[];
}

export interface StateType {
  source: DragVirtualListDataItem[];
  target: DragVirtualListDataItem[];
}

export type DragVirtualListProps = ExtractPropTypes<
  typeof dragVirtualListProps
>;
