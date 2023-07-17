---
title: $tagList API
permalinkPattern: /api/:slug/
---

# $tagList API

The `$tagList API` will return the tag usage of articles. With this API, you can get your article tags everywhere you need.

::: warning
Documents are still wrok in progress, the page is a incompelete version.
:::

## $tagList

- Type: `Object`
- Parent: `usePageData().value`

### Usage

Use in the page, you just need:

```js
$page.$tagList;
```

Or in the component, you need to import `usePageData`:

```js
import { usePageData } from "@vuepress/client";
...
const tagList = usePageData().value.$tagList;
```

You'll get the results like this:
<MyCodeView>{{ $page.$tagList }}</MyCodeView>
