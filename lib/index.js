const { createPage } = require('@vuepress/core')

const pagePush = async (app, pageData) => {
  app.pages.push(
    await createPage(app, pageData)
  )
}

module.exports = (options, app) => {
  return {
    name: 'vuepress-plugin-easy-blogger',
    onInitialized: (app) => {

      const blogPages = app.pages.filter(p => {
        return p.path.match(options.dir? options.dir: /^(\/post\/)/)
      })

      // console.log(options)

      blogPages.forEach(p => {
        const currentIndex = app.pages.findIndex(e=>e.key===p.key)
        app.pages.splice(currentIndex,1)

        const pageData = {
          key: p.key,
          filePath: p.path,
          // path: `/post/${p.slug}`,
          title: p.title,
          lang: p.lang,
          frontmatter: p.frontmatter,
          content: p.content,
        }
        pageData.frontmatter.permalinkPattern = options.permalinkPattern? options.permalinkPattern: "/post/:slug"
        pageData.frontmatter.layout = options.layout? options.layout: "Layout"
        pagePush(app, pageData)
      })

      // console.log(app)
    }
  }
}