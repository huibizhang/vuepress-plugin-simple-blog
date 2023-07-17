import { createPage } from "@vuepress/core";
import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default (options = { defaultList: true }) => {
  const pluginName = "vuepress-plugin-simple-blog";
  const $pagination = [];
  const $tagList = {};

  return (app) => {
    return {
      name: pluginName,
      clientConfigFile: path.resolve(__dirname, "./clientAppEnhance.js"),
      async onInitialized(app) {
        console.log(
          `\n\x1b[33m[${pluginName}]\x1b[37m Plugin is working now...\n`
        );

        if (options?.defaultList) {
          const additionalPages = [
            { url: "/posts", filePath: "./pages/posts.md" },
            { url: "/tags", filePath: "./pages/tags.md" },
          ];

          for (let ap of additionalPages) {
            if (app.pages.every((page) => page.path !== ap.url)) {
              const _page = await createPage(app, {
                path: ap.url,
                filePath: path.resolve(__dirname, ap.filePath),
              });
              app.pages.push(_page);
            }
          }

          const tagPages = Object.keys($tagList).map((t) => {
            return {
              tag: t,
              url: `/tags/${t}`,
              filePath: "./pages/tags.md",
            };
          });
          for (let tp of tagPages) {
            if (app.pages.every((page) => page.path !== tp.url)) {
              const _page = await createPage(app, {
                path: tp.url,
                filePath: path.resolve(__dirname, tp.filePath),
              });
              _page.data.$filter = tp.tag;
              app.pages.push(_page);
            }
          }
        }
      },
      extendsPage(page) {
        const reg = options?.dir ?? /^(\/post\/)/;

        const saveFileName = page.filePath?.replace(app.dir.source(""), "");

        if (saveFileName?.match(reg) && !saveFileName?.match(/index\.md$/)) {
          if (!$pagination.some((p) => p.path === page.path)) {
            const tags = page.frontmatter.tags
              ? page.frontmatter.tags.split(/[\b\,]/)
              : [];

            $pagination.push({
              key: page.key,
              url: page.path,
              title: page.title,
              tags: tags,
              content: page.contentRendered,
              hero: page.frontmatter.hero ? page.frontmatter.hero : "",
              date: page.date,
              updatedTime: page.data.git.updatedTime,
            });

            tags?.forEach((tag) => {
              if ($tagList[tag]) {
                $tagList[tag].count++;
                $tagList[tag].pages.push(page.path);
              } else {
                $tagList[tag] = {
                  count: 1,
                  pages: [page.path],
                };
              }
            });
          }
        }

        // console.log("you're visit ", page.path);

        page.data.$pagination = $pagination;
        page.data.$tagList = $tagList;
      },
      extendsPageOptions(pageOptions, app) {
        if (
          pageOptions.filePath
            ?.replace(app.dir.source(""), "")
            .match(options.dir ?? /^(\/post\/)/)
        ) {
          // console.log("extendsPageOptions:",pageOptions.filePath)
          pageOptions.frontmatter = pageOptions.frontmatter ?? {};
          pageOptions.frontmatter.permalinkPattern =
            options.permalinkPattern ?? "/post/:slug";
          pageOptions.frontmatter.layout = options.layout ?? "Layout";
        }
      },
    };
  };
};
