<template>
  <div
    v-if="Object.keys(tags).length"
    class="flex flex-wrap items-baseline justify-center gap-2"
  >
    <RouterLink
      v-for="tag in Object.keys(tags)"
      :key="tag"
      :to="`/tags/${tag}`"
    >
      <div
        class="text flex items-baseline rounded-full bg-gray-300 px-3 py-1 text-black transition-all hover:no-underline dark:bg-gray-600 dark:text-white"
      >
        {{ tag }} ({{ tags[tag].count }})
      </div>
    </RouterLink>
  </div>
</template>

<script>
import { usePageData } from "@vuepress/client";

export default {
  props: {
    title: {
      default: "tags",
    },
  },
  data() {
    return {
      tags: {},
    };
  },
  mounted() {
    this.tags = usePageData().value.$tagList;
    console.log(this.tags);
    // this.tags = tags ? tags.split(",") : [];
  },
};
</script>
