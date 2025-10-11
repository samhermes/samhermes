---
title: Remove date from slug in Astro
date: 2025-10-11T18:59:00 -5
tags: ['Static Sites', 'JavaScript']
---
AWhen I migrated my site from Eleventy to Astro, I had a bunch of posts that were still using a filename structure from when my site was on Jekyll. All of my posts were stored in markdown with the date first, then the title slug (like `YYYY-MM-DD-title-slug.md`). This kept the files in date order and made it easy to reference when I wrote something.

Out of the box with Astro, those dates were being used in the URL. This makes sense, as they are there! It would be weird if it didn’t. However, I wanted to remove the date to maintain the existing permalinks. In Eleventy, I had been able to specify how to handle the permalinks, but Astro doesn’t appear to have any built-in way to address this at the moment.

To keep things simple, my first approach to this was to trim the slugs down, as each date is the same length:

```js
post.id.slice(11)
```

File that under “it works!” and also “could be better!” I wanted a more stable solution, and a way that I wouldn’t need to remember to slice every single time. I was performing this slice both in the `getStaticPaths()` function in the template file, but also across the site any time I displayed a post in a list. Not so handy.

I then found a post called [Migrating My Blog to Astro](https://gotofritz.net/blog/migrating-blog-to-astro), where the author [discusses the same issue](https://gotofritz.net/blog/migrating-blog-to-astro/#prepend-post-filename-with-date-and-remove-it-when-generating-posts). They created a reusable function for handling the update, and then used that any time that they needed to get the post slug. I used the function that they created, but had to update it to get the `id` instead of `slug`. Additionally, my collection was named “posts” instead of “post.” Details. I like that this replacement is specifically looking for a date pattern through regex, so it will fall back cleanly if it isn’t found.

```js
import type { CollectionEntry } from "astro:content";

export function slugRewrite(post: CollectionEntry<"posts">) {
  return {
    ...post,
    slug: post.id.replace(/^\d{4}-\d{2}-\d{2}-/, ""),
  } as CollectionEntry<"posts">;
}
```

I used it in the `[...slug].astro` template file like so:

```js
return posts.map(slugRewrite).map((post) => ({
	params: { slug: post.slug },
	props: { post },
}));
```

And then in the template partial that I used to display an individual post, I updated the post link to the following:

```js
href={`/posts/${slugRewrite(post).slug}`}
```