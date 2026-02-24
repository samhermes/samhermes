---
title: Accessible pagination pattern for Astro
date: 2025-12-02T18:48:00 -6
tags: ['Accessibility', 'Static Sites']
---
In the Astro docs, the [demo code for adding pagination links](https://docs.astro.build/en/guides/routing/#pagination) is not very accessible. Instead of a list of anchor tags, we should use the `nav` element and add some structure around the links to communicate what they are.

Here’s (approximately) what I’m using on my site instead:

```astro
<nav class="post-list-pagination" aria-labelledby="post-list-pagination-heading">
  <h2 id="post-list-pagination-heading" class="screen-reader-text">Pagination</h2>
  <ul aria-labelledby="post-list-pagination-heading" role="list">
    {page.url.first ? (
      <li><a href={page.url.first}>First</a></li>
    ) : null}

    {page.url.prev ? (
      <li><a href={page.url.prev}>Previous</a></li>
    ) : null}

    <li class="pagination-current">Page {page.currentPage} of {page.lastPage}</li>
    
    {page.url.next ? (
      <li><a href={page.url.next}>Next</a></li>
    ) : null}

    {page.url.last ? (
      <li><a href={page.url.last}>Last</a></li>
    ) : null}
  </ul>
</nav>
```

The `nav` element allows someone to jump to the pagination if they are navigating by landmarks.

The `h2` element allows a user to jump to the pagination if they are navigation by headings. The `id` attribute on the heading allows us to tie it to the `nav` and `ul` elements to communicate what each are for. The heading is visually hidden using the `screen-reader-text` class.

The `role` element on the `ul` communicates that the `ul` is, in fact, a list, as we’re likely to remove the list styling with CSS. Applying `list-style: none;` can remove the meaning of the element.