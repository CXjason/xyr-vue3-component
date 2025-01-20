import { withInstall } from "@pureadmin/utils";
import type { SFCWithInstall } from "@pureadmin/utils";
import DragVirtualList from "./src/drag-virtual-list.vue";

export const XyrDragVirtualList: SFCWithInstall<typeof DragVirtualList> =
  withInstall(DragVirtualList);
export default XyrDragVirtualList;
