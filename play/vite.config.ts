import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig, type UserConfig } from "vite";
import { resolve } from "node:path";
import terser from "@rollup/plugin-terser";
import SvgLoader from "vite-svg-loader";
// import VueMacros from "unplugin-vue-macros/vite";
// import { defineConfig } from "unplugin-vue-macros";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    SvgLoader()
    // VueMacros({
    //   plugins: {
    //     vue: vue(),
    //     vueJsx: vueJsx(), // 如有需要
    //     // vueRouter: VueRouter({ // 如有需要
    //     //   extensions: ['.vue', '.setup.tsx']
    //     // })
    //   },
    //   // 覆盖插件选项
    // }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5174
  }
});
