---
title: Create a template for paginated collection in Astro
date: 2025-12-01T21:59:00 -6
tags: ['Static Sites']
---
Astro comes with support for paginated collections out of the box, and it’s easy to get it set up. It’s all powered by `paginate()`. The [Astro docs on Routing cover pagination](https://docs.astro.build/en/guides/routing/#pagination) in detail. As I was setting up the template to drive the /posts section of my site, a few questions came up.

## First page route without number

On my site, I wanted to take the index page at `/posts` and use it as the first page. The Astro docs suggest setting up a template named `[page].astro` for paginated collections, but this means that there is no longer a page at `/posts`, as a user would need to go to `/posts/1` to see the first page.

To get around this, we can use a [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) to make the template respond to the route without a page number. I learned this from [this Stack Overflow answer](https://stackoverflow.com/a/74889664). The template filename would become `[...page].astro` with this change. Problem solved! You’ll see an `index.html` file generated alongside the folders for each page, starting at `2`.

## Exempt the first page in the template

For the page title, I wanted to use “Posts” on the first page, and then on every other page, append the page number.

When using the `paginate()` function, a `page` prop is added with additional information about what page you’re on and what other pages exist. [See the docs for the full listing](https://docs.astro.build/en/guides/routing/#the-page-prop). The prop can be accessed like this: `const { page } = Astro.props;`

Under `page`, we have access to `currentPage`. We can check to see if this variable is equal to `1` and then handle the page title differently based on that logic.

In my case, I appended the page number to the title like so:

```jsx
{page.currentPage === 1 ? '' : ` - Page ${page.currentPage}`}
```

## Get total number of pages

When displaying pagination, I liked to show where a user is at. Are there many more pages? Are we almost at the end?

The total number of pages can be accessed at `page.lastPage`. With this, we can display the current position like so:

```jsx
<p>Page {page.currentPage} of {page.lastPage}</p>
```

## Add current page to title tag

To match the h1 on the page, I wanted to updated the title tag to append the page number on each page that isn’t the first. I was able to use the same logic as the h1 and then passed this value through the layout component to the `title` tag.

```jsx
const pageTitle = `Posts${page.currentPage === 1 ? "" : ` - Page ${page.currentPage}`}`;
```