export type DragVirtualTableDataItem = Record<string, any>;

export const dragVirtualTableProps = {
  // 表格列表数据
  data: {
    type: Array,
    default: () => []
  },
  dragSlot: {
    // 是否可以拖拽
    type: Boolean,
    default: false
  },
  columns: {
    // 列配置
    type: Array,
    default: () => []
  },
  size: {
    // size 大小
    type: String,
    default: () => []
  },
  isHeader: {
    // 是否显示头部
    type: Boolean,
    default: true
  },
  isNumSort: {
    // 是否可以输入序号进行排序
    type: Boolean,
    default: false
  }
};
