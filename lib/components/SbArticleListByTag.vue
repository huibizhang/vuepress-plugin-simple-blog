<template>
  <div
    v-if="filter && pagination"
    class="inset-0 mx-auto flex w-full flex-col items-center space-y-3 py-3"
  >
    <SbArticleCard
      v-for="p in pagination"
      :key="p.key"
      v-bind="p"
      :content="getContentOnlyText(p.content)"
    />
  </div>
</template>

<script>
import { usePageData } from "@vuepress/client";
import SbArticleCard from "./SbArticleCard.vue";
import markdownit from "markdown-it";

export default {
  props: {
    filter: { default: false },
  },
  data() {
    return {
      pagination: [],
    };
  },
  mounted() {
    if (this.filter) {
      this.pagination = usePageData().value.$pagination.filter((p) =>
        p.tags.includes(this.filter)
      );
    }
  },
  methods: {
    getContentOnlyText(contentHTML) {
      if (typeof document !== "undefined") {
        const md = new markdownit({
          html: true,
        });
        const preHtml = document.createElement("div");
        preHtml.innerHTML = contentHTML;

        const h1 = preHtml.getElementsByTagName("h1");
        h1.length > 0 && h1[0].remove();

        preHtml.innerHTML = md.render(preHtml.textContent);
        return preHtml.innerText;
      }
      return contentHTML;
    },
  },
  components: { SbArticleCard },
};
</script>
