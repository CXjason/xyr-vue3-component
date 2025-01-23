import consola from "consola";
import { REPO_BRANCH, REPO_PATH } from "../utils/constants";
import { docsDirName } from "../utils/constants";
import { languages } from "../utils/lang";
import { features } from "./features";
import { head } from "./head";
import { nav } from "./nav";
import { mdPlugin } from "./plugins";
import { sidebars } from "./sidebars";

import type { UserConfig } from "vitepress";

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true
    };
  };

  const transformers = {};
  const directives = [
    "infinite-scroll",
    "loading",
    "popover",
    "click-outside",
    "repeat-click",
    "trap-focus",
    "mousewheel",
    "resize"
  ];
  directives.forEach(k => {
    transformers[k] = transformer;
  });

  return transformers;
};

consola.debug(`DOC_ENV: ${process.env.DOC_ENV}`);

console.log(1212);

const locales = {};
languages.forEach(lang => {
  locales[`/${lang}`] = {
    label: lang,
    lang
  };
});

const config: UserConfig = {
  base: "/xyr-vue3-component/",
  title: "xyr vue3 component",
  description: "A Vue 3 based component library for designers and developers",
  lastUpdated: true,
  head,
  themeConfig: {
    repo: REPO_PATH,
    docsBranch: REPO_BRANCH,
    docsDir: docsDirName,

    editLinks: true,
    editLinkText: "Edit this page on GitHub",

    logo: "/images/element-plus-logo.svg",
    logoSmall: "/images/element-plus-logo-small.svg",
    sidebars,
    nav,
    agolia: {
      apiKey: "99caf32e743ba77d78b095b763b8e380",
      appId: "ZM3TI8AKL4"
    },
    features,
    langs: languages
  },

  locales,

  markdown: {
    config: md => mdPlugin(md)
  },

  vue: {
    template: {
      compilerOptions: {
        hoistStatic: false,
        directiveTransforms: buildTransformers()
      }
    }
  },
  postRender(context) {
    // Inject the teleport markup
    if (context.teleports) {
      const body = Object.entries(context.teleports).reduce(
        (all, [key, value]) => {
          if (key.startsWith("#el-popper-container-")) {
            return `${all}<div id="${key.slice(1)}">${value}</div>`;
          }
          return all;
        },
        context.teleports.body || ""
      );

      context.teleports = { ...context.teleports, body };
    }

    return context;
  }
};
export default config;
