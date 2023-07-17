<template>
  <div v-if="tags.length" class="flex space-x-1 items-baseline">
    <div>{{ title }}: </div>
    <div v-for="tag in tags" :key="tag" class="text-xs py-0.5 px-2 bg-gray-300 dark:bg-gray-600 rounded-full flex items-baseline transition-all">
      {{ tag }}
    </div>
  </div>
</template>

<script>
import { usePageFrontmatter } from '@vuepress/client'

export default {
  props: {
    title: {
      default: "tags"
    }
  },
  data () {
    return {
      tags: []
    }
  },
  mounted() {
    const tags = usePageFrontmatter().value.tags
    this.tags = tags ? tags.split(","): []
  },
}
</script>