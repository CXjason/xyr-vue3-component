import { withInstall } from "@pureadmin/utils";
import type { SFCWithInstall } from "@pureadmin/utils";

import TableBar from "./src/index";

export const XyrTableBar: SFCWithInstall<typeof TableBar> =
  withInstall(TableBar);
export default XyrTableBar;
