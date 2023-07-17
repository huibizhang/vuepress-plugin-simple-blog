---
title: Components
permalinkPattern: /components/
tags: components,example
---

# Components

The plugin provides **several components** that you can use when writing blog. The components are named with the prefix **`Sb`** for consistency.

To customize your own styles, you can refer to and use the [Client APIs](/api/) provided by the plugin.

## SbArticleList

<DisplayBox><SbArticleList /></DisplayBox>

**SbArticleList** show all articles in a list. You can add the components in your `.md` or `.vue` file by yourselfs.

### Usage

```html
<sb-article-list></sb-article-list>

<!-- or -->
<SbArticleList></SbArticleList>
```

&nbsp;

## SbArticleListByTag

<DisplayBox>

```html
<SbArticleListByTag filter="test1" />
```

<SbArticleListByTag filter="test1" />
</DisplayBox>

**SbArticleListByTag** show the articles filtered by tag. You can add the components in your `.md` or `.vue` file by yourselfs.

### Usage

The attribute `filter` for the component is required. For the example given, it set the filter to **`test1`** for the components.

```html
<sb-article-list-by-tag filter="TAG-NAME"></sb-article-list-by-tag>

<!-- or -->
<SbArticleListByTag filter="TAG-NAME"></SbArticleListByTag>
```

#### filter

- type: `string`
- input: `tag name`

&nbsp;

## SbTagClouds

<DisplayBox>
  &nbsp;
  <SbTagClouds />
</DisplayBox>

**SbTagClouds** show all tags the articles used. You can add the components in your `.md` or `.vue` file by yourselfs.

### Usage

```html
<sb-tag-clouds></sb-tag-clouds>

<!-- or -->
<SbTagClouds></SbTagClouds>
```

&nbsp;

## SbTagsInArticle

<DisplayBox>
  &nbsp;
  <SbTagsInArticle />
</DisplayBox>

**SbTagsInArticle** will show all tags of the current article used. You can add the components in your `.md` or `.vue` file by yourselfs.

### Usage

```html
<sb-tags-in-article></sb-tags-in-article>

<!-- or -->
<SbTagsInArticle></SbTagsInArticle>
```
