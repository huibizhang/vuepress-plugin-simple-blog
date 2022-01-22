---
title: Customizaion
---

# Customizaion

::: tip
Before you learn about the plugin customizing, you need to see the [Guide](/guide/) sectoin.
:::

## dir
- Type: `RegExp`
- Default: `/^\/post\//`

Directory of articles. The artcles directory location by default is `docs/post/`.

#### Default
The following configuration is same to default:
```js
module.exports = {
  // ...
  plugins: [
    ['vuepress-plugin-simple-blog',{
      dir: /^\/post\//
    }]
  ]
  // ...
}
```
#### Example
For example, if your articles put in the `docs/article/`, then just change the value of `dir` key:
```js
module.exports = {
  // ...
  plugins: [
    ['vuepress-plugin-simple-blog',{
      dir: /^\/articls\//
    }]
  ]
  // ...
}
```

## permalinkPattern
- Type: `string`
- Default: `"/post/:slug"`

The permalink pattern for article.

#### Default
The following configuration is same to default:
```js
module.exports = {
  // ...
  plugins: [
    ['vuepress-plugin-simple-blog',{
      permalinkPattern: "/post/:slug"
    }]
  ]
  // ...
}
```
#### Example
For example, if you want your articles url like `{your-site-domain}/2022/01/22/xxxx.html`, just chage the pattern.
```js
module.exports = {
  // ...
  plugins: [
    ['vuepress-plugin-simple-blog',{
      permalinkPattern: "/:year/:month/:day/:slug.html"
    }]
  ]
  // ...
}
```
For more detail of permalinkPattern's options, read the vuepress official [permalinkPattern](https://v2.vuepress.vuejs.org/reference/frontmatter.html#permalinkpattern) document.

## layout
- Type: `string`
- Default: `"Layout"`

Layout of article page.

#### Default
The following configuration is same to default:
```js
module.exports = {
  // ...
  plugins: [
    ['vuepress-plugin-simple-blog',{
      layout: "Layout"
    }]
  ]
  // ...
}
```
#### Example
For example, if you have a custom layout want to use, just put on the layout name, like `ArticlePage`:
```js
module.exports = {
  // ...
  plugins: [
    ['vuepress-plugin-simple-blog',{
      layout: "ArticlePage"
    }]
  ]
  // ...
}
```