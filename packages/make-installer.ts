import { INSTALLED_KEY } from "./constants";
import { version } from "./version";
import type { App } from "@vue/runtime-core";

export const makeInstaller = (components: any) => {
  const install = (app: App) => {
    if ((app as any)[INSTALLED_KEY]) return;

    (app as any)[INSTALLED_KEY] = true;
    //console.log(components);

    components.forEach((c: any) => {
      //console.log(c.name);
      app.component(c.name, c);
      //app.use(c);
    });
  };

  return {
    version,
    install
  };
};
