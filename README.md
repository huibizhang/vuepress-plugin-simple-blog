# vuepress-plugin-simple-blog

Referred to the Official plugin [@vuepress/plugin-blog](https://github.com/vuepress/vuepress-plugin-blog), support Vuepress v2 to make a simple blog.

### Installation
```bash
yarn add -D vuepress-plugin-simple-blog
# or npm i -D vuepress-plugin-simple-blog
```

### Usage
To use this plugin, just add plugin name to `plugins` option of `.vuepress/config.js`.

```javascript
module.exports = {
  plugins: ['vuepress-plugin-simple-blogger']
}
```
And Vuepress'll compiled the `.md` files in `docs/post/` directory. All posts will **have the permalink** like `https://www.example.com/post/xxxxxx/` by using **permalinkPattern:** `/post/:slug`.

### Customization
To customize your blog permalink, layout or files location, we need to see the default options first.

```javascript
module.exports = {
  plugins: [
    ...
    ['vuepress-plugin-simple-blogger',{
      dir: /^(\/post\/)/,
      permalinkPattern: "/post/:slug",
      layout: "Layout",
    }],
    ...
  ]
}
```

#### Layout
So, you can just customize to use your layout like:
```javascript
module.exports = {
  plugins: [
    ...
    ['vuepress-plugin-simple-blogger',{
      layout: "PostLayout",
    }],
    ...
  ]
}
```

#### Permalink
Or you can change your post link style like `/article/2022/01/20/HelloWorld/` by **`permalinkPattern`**:
```javascript
module.exports = {
  plugins: [
    ...
    ['vuepress-plugin-simple-blogger',{
      permalinkPattern: "/article/:year/:month/:slug",
    }],
    ...
  ]
}
```

#### Files Directory
If you don't like to put your articles in the `docs/post/` folder, you also can change the `dir` by **Regular Expression**:
```javascript
module.exports = {
  plugins: [
    ...
    ['vuepress-plugin-simple-blogger',{
      dir: /^(\/blog\/)/, // example for `docs/blog/`
    }],
    ...
  ]
}
```

## MIT