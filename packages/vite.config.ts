import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig, type UserConfig } from "vite";
import { resolve } from "node:path";
import terser from "@rollup/plugin-terser";
import SvgLoader from "vite-svg-loader";
import dts from "vite-plugin-dts";
// import VueMacros from "unplugin-vue-macros/vite";
// import { defineConfig } from "unplugin-vue-macros";

const lifecycle = process.env.npm_lifecycle_event;

function getConfig(): UserConfig {
  console.log(lifecycle);

  let buildEnv = ["build", "watch"];

  return buildEnv.includes(lifecycle)
    ? {
        publicDir: false,
        build: {
          lib: {
            entry: resolve(__dirname, "./index.ts"),
            name: "lonsdor",
            fileName: format => `index.${format}.js`
          },
          rollupOptions: {
            treeShake: true,
            external: ["vue", "element-plus"],
            output: {
              globals: {
                vue: "Vue",
                "element-plus": "ElementPlus"
              },
              exports: "named"
            },
            plugins: [terser({ compress: { drop_console: true } })]
          },
          cache: true
        }
      }
    : ({
        base: "./",
        build: {
          sourcemap: false,
          chunkSizeWarningLimit: 4000
        }
      } as any);
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    SvgLoader(),
    dts({ tsconfigPath: "../tsconfig.build.json" })
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

  ...getConfig(),
  server: {
    port: 5175
  }
});
