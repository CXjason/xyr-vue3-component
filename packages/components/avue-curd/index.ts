import { withInstall } from "@pureadmin/utils";
import type { SFCWithInstall } from "@pureadmin/utils";

import AvueCurd from "./src/index.vue";

export const XyrAvueCurd: SFCWithInstall<typeof AvueCurd> =
  withInstall(AvueCurd);
export default XyrAvueCurd;
