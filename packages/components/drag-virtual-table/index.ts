import { withInstall } from "@pureadmin/utils";
import type { SFCWithInstall } from "@pureadmin/utils";

import DragVirtualTable from "./src/drag-virtual-table.vue";

export const XyrDragVirtualTable: SFCWithInstall<typeof DragVirtualTable> =
  withInstall(DragVirtualTable);
export default XyrDragVirtualTable;
