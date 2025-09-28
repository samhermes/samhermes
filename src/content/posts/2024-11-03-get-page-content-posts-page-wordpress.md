---
title: Get page content for posts page in WordPress
date: 2024-11-03T12:41:00 -5
tags: ['WordPress']
---
In WordPress, you can set your homepage to either display a list of the latest posts or a static page. When the static page option is used, you can additionally select a second page on which to display the list of the latest posts. Of course, to select this page, you’ll need to have created a page that you’d like to use. This page will be overtaken by the list of the latest posts, so any content that you add to the page will not be displayed.

In the event that you’d like to show that page’s content in addition to the list of posts, you can fetch the content using the page ID. Here, the page ID is retrieved using `get_option()` to get the page currently assigned as the posts page, and then the ID is used to get the page content using `apply_filters()`. Optionally, the current page number could be stored in a variable for later use.

```php
// Optional - used for showing the content on just the first page
$current_page = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
$page_for_posts = get_option( 'page_for_posts' );
$posts_page_content = apply_filters( 'the_content', get_the_content( null, false, $page_for_posts ) );
```

Next, at the spot in the template where you’d like to display the content, use `wp_kses_post()` to output the variable. Here, a check is performed for the existence of the content (in case there is no content on the page), and then a check to see if this is the first page of results. As most users will land on the first page, we can assume that they’ve already read the content and skip it on the second page, where they are likely just browsing the posts.

```php
if ( $posts_page_content && $current_page === 1 ) {
  echo '<div class="page-content">' . wp_kses_post( $posts_page_content ) . '</div>';
}
```