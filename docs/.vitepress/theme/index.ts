import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import XyrVue from "xyr-vue3-component";
import "@smallwei/avue/lib/index.css";
import "xyr-vue3-component/dist/style.css";

import VPApp, { NotFound, globals } from "../vitepress";
import { define } from "../utils/types";
import Avue from "@smallwei/avue";

import "./style.css";
import type { Theme } from "vitepress";

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus);
    app.use(Avue);
    app.use(XyrVue);

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  }
});
