import { defineClientConfig } from "@vuepress/client";
import SbArticleList from "./components/SbArticleList.vue";
import SbArticleListByTag from "./components/SbArticleListByTag.vue";
import SbTagClouds from "./components/SbTagClouds.vue";
import SbTagsInArticle from "./components/SbTagsInArticle.vue";
import "./tailwind.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("SbArticleList", SbArticleList);
    app.component("SbArticleListByTag", SbArticleListByTag);
    app.component("SbTagClouds", SbTagClouds);
    app.component("SbTagsInArticle", SbTagsInArticle);
  },
  setup() {},
  layouts: {},
  rootComponents: [],
});
