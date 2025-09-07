---
title: Build dynamic meta titles in Astro
date: 2025-09-07T12:09:00 -5
tags: ['JavaScript', 'Static Sites']
---
In Astro, you can create your meta tags in whatever way you’d like. It’s really freeform, so getting things set up exactly the way you’d like is rather manual. The difficulty can come from making customizations based on the page that is displaying.

In the most basic case, let’s say that you want the site title to be the name of the homepage, and then on every other page you want the page title, a dash, and then the site title. This is something that you’d likely handle in the root layout file for your site, or in a `Head` component.

You can get the page title from `Astro.props`, which contains data about the current page. The current path can be retrieved from `Astro.url.pathname`.

The path can be checked against the homepage path, which is `/`. In this example, if it’s not the homepage, it inserts the page title and a dash, and then always adds the site title.

```js
---
const { title } = Astro.props;
const path = Astro.url.pathname;

const pageTitle = path !== "/" ? `${pageTitle} - ` : "";
const metaTitle = `${pageTitle}Your Site Title Here`;
---
```

Once that’s assembled, you can add the title to the page using the `title` tag and the `metaTitle` variable.

```html
<title>{metaTitle}</title>
```

I’ve looked at ways that I could get the current collection to further refine the title, but there doesn’t seem to be a way to do that at a global level. For my case, I was able to manually add the collection name to the frontmatter of each markdown file, and then pass that to the global layout file for inclusion. Again, it's all a bit manual, it seems. Great for flexibility, but it would be nice if there was a little more structure here.