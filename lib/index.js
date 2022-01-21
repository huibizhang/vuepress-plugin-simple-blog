const { createPage } = require('@vuepress/core')

const pagePush = async (app, pageData) => {
  app.pages.push(
    await createPage(app, pageData)
    )
  }
  
module.exports = (options, app) => {
  
  const $pagination = []
  const $tagList = {}

  return {
    name: 'vuepress-plugin-simple-blogger',
    onInitialized: (app) => {

      const blogPages = app.pages.filter(p => {
        return p.path.match(options.dir? options.dir: /^(\/post\/)/)
      })

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
    },
    extendsPage: (page) => {
      const reg = options.dir? options.dir: /^(\/post\/)/
      if(page.filePath && page.filePath.match(reg) && !page.filePath.match(/\/$/)){
        if(!$pagination.includes(page.path)){
          $pagination.push(page.path)

          if(page.frontmatter.tags){
            page.frontmatter.tags.forEach(tag=>{
              if($tagList[tag]){
                $tagList[tag].count++
                $tagList[tag].pages.push(page.path)
              } else {
                $tagList[tag] = {
                  count: 1,
                  pages: [page.path]
                }
              }
            })
          }
        }
      }

      page.data.$pagination = $pagination
      page.data.$tagList = $tagList
    },
  }
}