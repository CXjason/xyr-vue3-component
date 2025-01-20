import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import LonsdorVue from "lonsdor-vue3-component";

import VPApp, { NotFound, globals } from "../vitepress";
import { define } from "../utils/types";

import "uno.css";
import "./style.css";
import type { Theme } from "vitepress";

console.log(LonsdorVue);

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus);
    app.use(LonsdorVue);

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  }
});
