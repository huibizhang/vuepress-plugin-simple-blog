---
title: Getting Started
permalinkPattern: /guide/:slug/
---

# Getting Started

::: warning
If you have created a ***vuepress v2*** project, just move to [Installation](#Installation) section.
:::

## Create a Project
First, you need a vuepress v2 project, just create a folder and run following commands:

```bash:no-line-numbers
yarn init
git init
yarn add -D vuepress@next
```

create a `docs` folder and add a `readme.md` file into the folder.
Here is the example of `readme.md`
```md
# Hello World
My first vuepress blog.
```

After this, create a `.vuepress` folder in `docs` and add a `config.js` file into the `.vuepress` folder. Here is the example of `config.js`
```js
module.exports = {
  title: 'My vuepress blog',
  description: 'This blog is created by Vuepress v2 and vuepress-plugin-simple blog',
  plugins: []
}
```

And the directory structure will like:
```
└─ docs
   ├─ .vuepress
   │  ├─ config.js
   └─ readme.md
└─ package.json
  ...
```
Learn more about [Vuepress](https://v2.vuepress.vuejs.org/guide/).

## Installation
Install the plugin into project:
```bash
yarn add -D vuepress-plugin-simple-blog
# or npm i -D vuepress-plugin-simple-blog
```

## Usage
Add plugin name to `plugins` option of `.vuepress/config.js`.

```js
module.exports = {
  // ...
  plugins: ['vuepress-plugin-simple-blogger']
  // ...
}
```

### Posts Directory
Create a `post` folder in `docs`, and put your article into the folder. In my case, I'll put `2022-01-20-hello-world.md` and `2022-01-22-using-tailwindcss-in-vuepress2.md` into the `docs/post/`.

Here is the example of `2022-01-20-hello-world.md`:
```md
# Hello World
Hi, This is my first post.
```

And this is the example of `2022-01-22-using-tailwindcss-in-vuepress2.md`:
```md
# Using TailwindCSS in Vuepress2
TailwindCSS is the best CSS framework that I recommand you to use.

In vuepress, there is a **easy way**...
```

After you put it, launch your dev server, you can see the articles are **all can visit**. The link of article will be like `{your-sites-domain}/post/xxxxxx/`.

In my case, there is the artcle name and the link:

- `docs/post/2022-01-20-hello-world.md`
  - link will be [**`{mysite}/post/hello-world/`**](/post/hello-world/) (← click can visit)
- `docs/post/2022-01-22-using-tailwindcss-in-vuepress2.md`
  - link will be [**`{mysite}/post/using-tailwindcss-in-vuepress2/`**](/post/using-tailwindcss-in-vuepress2/) (← click can visit)

<!-- And Vuepress'll compiled the `.md` files in `docs/post/` directory. All posts will **have the permalink** like `https://www.example.com/post/xxxxxx/` by using **permalinkPattern:** `/post/:slug`. -->

## Customization