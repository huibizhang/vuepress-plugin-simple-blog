module.exports = (options, app) => {
  
  const pluginName = 'vuepress-plugin-simple-blog'
  const $pagination = []
  const $tagList = {}

  return {
    name: pluginName,
    onInitialized: (app) => {
      console.log(`\n\x1b[33m[${pluginName}]\x1b[37m Plugin is working now...\n`)
    },
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
      const saveFileName = page.filePath?.replace(app.dir.source(''),'')

      if(saveFileName?.match(reg) && !saveFileName?.match(/index\.md$/)){

        if(!$pagination.some(p => p.path === page.path)){

          const tags = page.frontmatter.tags? page.frontmatter.tags.split(/[\b\,]/): []

          $pagination.push({
            key: page.key,
            url: page.path,
            title: page.title,
            tags: tags,
            content: page.contentRendered,
            hero: page.frontmatter.hero? page.frontmatter.hero: "",
            date: page.date,
            updatedTime: page.data.git.updatedTime
          })

          tags?.forEach(tag=>{
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