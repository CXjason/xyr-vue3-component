import path from "path";
import Inspect from "vite-plugin-inspect";
import { defineConfig, loadEnv } from "vite";
import VueMacros from "unplugin-vue-macros/vite";
import mkcert from "vite-plugin-mkcert";
import glob from "fast-glob";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { pkgRoot, projRoot } from "./.vitepress/utils/constants";
import { MarkdownTransform } from "./.vitepress/plugins/markdown-transform";
import UnoCSS from "unocss/vite";

import type { Alias } from "vite";

const alias: Alias[] = [
  {
    find: "~/",
    replacement: `${path.resolve(__dirname, "./.vitepress/vitepress")}/`
  },
  {
    find: /^lonsdor-vue3-component(\/(es|lib))?$/,
    replacement: path.resolve(pkgRoot, "index.ts")
  }
];

console.log(path.resolve(pkgRoot, "index.ts"));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [projRoot]
      }
    },
    resolve: {
      alias
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        hoistStatic: {
          exclude: ["./**/*.vue"]
        },
        plugins: {
          vueJsx: vueJsx()
        }
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: [".vitepress/vitepress/components"],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver()
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true
      }),
      UnoCSS(),
      MarkdownTransform(),
      Inspect(),
      mkcert()
    ]
  };
});
