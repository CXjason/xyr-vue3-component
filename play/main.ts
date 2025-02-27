import { createApp } from "vue";
import "element-plus/dist/index.css";
import XyrComponent from "xyr-vue3-component";
import "xyr-vue3-component/dist/style.css";
import "@smallwei/avue/lib/index.css";
import ElementPlus from "element-plus";
import Avue from "@smallwei/avue";

(async () => {
  const apps = import.meta.glob("./pages/*.vue");
  const name = location.pathname.replace(/^\//, "") || "App";
  const file = apps[`./pages/${name}.vue`];

  if (!file) {
    location.pathname = "App";
    return;
  }

  const App = ((await file()) as any).default;

  const app = createApp(App);

  app.use(ElementPlus);
  app.use(Avue);
  app.use(XyrComponent);

  app.mount("#app");
})();
