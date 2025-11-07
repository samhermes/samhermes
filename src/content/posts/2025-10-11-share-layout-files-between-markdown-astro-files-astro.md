---
title: Share layout files between markdown and astro files in Astro
date: 2025-10-11T12:04:00 -5
tags: ['Static Sites', 'JavaScript']
---
As I migrated my site to Astro, one issue that came up was how to handle the flow of metadata when there are multiple types of file formats. Mainly, markdown stores data in a different way from `.astro` files. It’s really nice to be able to mix and match these, but the pages that are generated are visually similar. So, separating them based on file type seemed wasteful.

I tried a couple of approaches to fix this issue, and first started with trying to merge the layout files and then adding in a lot of conditional checks. I’d default to the `.astro` format, and then check for frontmatter data from the markdown files. This ended up with a lot of code like this:

```jsx
const pageTitle = title ?? frontmatter?.title;
```

This got unwieldy pretty quickly, and didn’t seem like a great system if I were to expand the data that I was passing around. This pushed me towards using props to create a more standardized approach.

Fortunately, Astro supports nested layout files. This allows for a shared wrapper that applies the outer structure of a page, such as the `head` and basic `body` wrapper, and then a series of more specific layout files can drive content type specific templates.

The result of this is that I have a `SiteLayout.astro` file that supports a set of props, and then I have other layout files such as `PostLayout.astro` and `PageLayout.astro` that handle passing the metadata for that content type. This looks something like this:

```jsx
<SiteLayout title={frontmatter.title}>
  ...
</SiteLayout>
```
