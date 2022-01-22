<template>
  <div
    class="article-card"
    v-for="p of pagination"
    :key="p.key"
  >
    <div class="article-image">
      <img v-if="p.hero" :src="p.hero">
    </div>
    <div class="article-info">
      <a :href="p.url">{{ p.title }}</a>
      <p>{{ getContentOnlyText(p.content) }}</p>
      <div>
        <span
          v-for="tag of p.tags"
          :key="`${p.key}-${tag}`"
        >
          {{tag}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { usePageData } from '@vuepress/client'

export default {
  data () {
    return {
      pagination: usePageData().value.$pagination,
    }
  },
  methods:{
    getContentOnlyText (contentHTML) {
      const preHtml = document.createElement("div")
      preHtml.innerHTML = contentHTML
      return preHtml.innerText
    },
  },
}
</script>

<style lang="scss" scoped>

.article-card {
  width: 90%;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #CCCCCC;
  margin-bottom: 5px;
  overflow: hidden;
  display: flex;

  .article-image {
    width: 100px;
    height: 100px;
    flex: none;
    background: #f5f5f5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .article-info {
    flex-grow: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;

    a {
      font-size: 20px;
      font-weight: bold;
    }

    p {
      margin: 3px;
      height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      gap: 5px;

      span {
        font-size: 10px;
        display: block;
        background: #EFEFEF;
        border-radius: 1000px;
        padding-top: 3px;
        padding-right: 8px;
        padding-bottom: 3px;
        padding-left: 8px;
      }
    }
  }
}
</style>