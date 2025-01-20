export { NOOP, toRawType } from "@vue/shared";
import { v4 } from "uuid";

export const getUuid = () => {
  return v4().replace(/-/gi, "");
};
