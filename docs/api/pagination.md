---
title: $pagination API
permalinkPattern: /api/:slug/
---

<script>
import { usePageData } from "@vuepress/client";

export default {
  data() {
    return {
      usePageData: usePageData
    }
  }
}  
</script>

# $pagination API

The `$pagination API` will return the basic page info for articles. With this API, you can get your articles data everywhere you need.

::: warning
Documents are still wrok in progress, the page is a incompelete version.
:::

## $pagination

- Type: `Array`
- Parent: `usePageData().value`

### Usage

Use in the page, you just need:

```js
$page.$pagination;
```

Or in the component, you need to import `usePageData`:

```js
import { usePageData } from "@vuepress/client";
...
const pagination = usePageData().value.$pagination;
```

For example, if this is your articles:

<SbArticleList />
<!-- <SbTest /> -->

and you'll get the results like this:

<MyCodeView>{{ $page.$pagination }}</MyCodeView>

<!-- <SbTagsInArticle /> -->
