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
    name: 'vuepress-plugin-simple-blog',
    // onInitialized: (app) => {
    //   const blogPages = app.pages.filter(p => {
    //     return p.path.match(options.dir? options.dir: /^(\/post\/)/)
    //   })

    //   console.log("==== onInitialized ====")
    //   blogPages.forEach(p => {
    //     const currentIndex = app.pages.findIndex(e=>e.key===p.key)
    //     app.pages.splice(currentIndex,1)

    //     const pageData = {
    //       key: p.key,
    //       filePath: p.path,
    //       // path: p.path,
    //       // path: `/post/${p.slug}`,
    //       title: p.title,
    //       lang: p.lang,
    //       frontmatter: p.frontmatter,
    //       content: p.content,
    //       // git: p.data.git
    //     }
    //     pageData.frontmatter.permalinkPattern = options.permalinkPattern? options.permalinkPattern: "/post/:slug"
    //     pageData.frontmatter.layout = options.layout? options.layout: "Layout"
        
    //     pagePush(app, pageData)
    //   })
    // },
    extendsPageOptions: (pageOptions, app) => {
      if(pageOptions.filePath?.replace(app.dir.source(''),'').match(options.dir? options.dir: /^(\/post\/)/)){
        // console.log("extendsPageOptions:",pageOptions.filePath)
        pageOptions.frontmatter = pageOptions.frontmatter ?? {}
        pageOptions.frontmatter.permalinkPattern = options.permalinkPattern? options.permalinkPattern: "/post/:slug"
        pageOptions.frontmatter.layout = options.layout? options.layout: "Layout"
      }
    },
    extendsPage: (page) => {
      const reg = options.dir? options.dir: /^(\/post\/)/

      if(page.filePath?.match(reg) && !page.filePath?.match(/\/$/)){
        if(!$pagination.some(p=>p.path === page.path)){

          $pagination.push({
            key: page.key,
            url: page.path,
            title: page.title,
            tags: page.frontmatter.tags? page.frontmatter.tags: [],
            content: page.contentRendered,
            hero: page.frontmatter.hero? page.frontmatter.hero: "",
            date: page.date,
          })

          page.frontmatter.tags?.forEach(tag=>{
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

      page.data.$pagination = $pagination
      page.data.$tagList = $tagList
    },
  }
}