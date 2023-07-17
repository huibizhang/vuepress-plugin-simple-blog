import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

const __dirname = getDirname(import.meta.url);
import vuepress_plugin_simple_blog from "../../lib/index.js";

export default defineUserConfig({
  title: "vuepress-plugin-simple-blog",
  description: "A simple blog plugin for vuepress v2.",
  locales: {
    "/": {
      lang: "en-US",
      description: "A simple blog plugin for Vuepress v2",
    },
    // "/zh/": {
    //   lang: "zh-TW",
    //   description: "專為 Vuepress v2 而生的簡易部落格插件",
    // },
  },
  theme: defaultTheme({
    repo: "https://github.com/huibizhang/vuepress-plugin-simple-blog",
    contributors: false,
    locales: {
      "/": {
        selectLanguageName: "English",
      },
      "/zh/": {
        selectLanguageName: "繁體中文",
        selectLanguageText: "切換語言",
        selectLanguageAriaLabel: "切換語言",
      },
    },
    navbar: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Customization",
        link: "/customization/",
      },
      {
        text: "APIs",
        link: "/api/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          children: ["/guide/index.md", "/guide/getting-started.md"],
        },
      ],
      "/customization/": [
        {
          text: "Customization",
          link: "/customization/",
        },
      ],
      "/api/": [
        {
          text: "Client APIs",
          link: "/api/",
          children: ["/api/pagination.md", "/api/tag-list.md"],
        },
      ],
    },
  }),
  plugins: [
    vuepress_plugin_simple_blog(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./global_components"),
    }),
  ],
});
