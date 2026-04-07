---
title: Automatic columns in CSS grid
date: 2026-04-06T20:05:00 -5
tags: ['CSS']
---
When I’m using CSS Grid, I’ll often set a `grid-template-columns` for each breakpoint. Usually, I’m going for something like two columns on mobile, three on tablet, and four on desktop. However, with `auto-fit` and `minmax()`, this can happen with a single declaration. I’m always forgetting that this is a possibility!

```css
grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
```

This approach uses `repeat()` to create a series of columns. For the first argument, the `count` attribute, it uses [`auto-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/repeat#auto-fit). This tells the browser to make as many columns as will fit. This could also use `auto-fill`, based on your needs. CSS Tricks has a [great explainer on the differences](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/).

Next, it uses `minmax()` to set a minimum width for each column, and a maximum. In this example, the minimum is equal to 100px (set in `rem`), and the maximum uses  `1fr` so that the columns evenly distribute once they are above the minimum.