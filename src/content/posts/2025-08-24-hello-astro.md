---
title: Hello, Astro!
date: 2025-08-24T12:51:00 -5
tags: ['JavaScript', 'Static Sites']
---
My site is now running on the Astro framework. I’ve had my eye on Astro for a long time, and was looking for an excuse to use it. I finally realized that I could just use it for my own site! I assumed that I’d need to be in migration for a little while, and created a branch to handle the switch. However, it went so smoothly, I’m already done.

## From Eleventy
My site previously ran on Eleventy, which I loved. For my purposes, the two frameworks are fairly similar. Also, they are both built with JavaScript, and so edge cases are handled in similar ways.

Each framework also works off of “collections” of content, so setting up and handling groups of pages is very similar. I found Astro’s handling to be a little easier to work with, as collection content needs to be separate from the template. It made it easier to understand where to put everything.

## It Just Works
I’m still marveling at the way that Astro is able to get markdown, HTML, and the special `.astro` files to work together seamlessly. I have all of my posts stored in markdown, some of my landing pages have custom HTML. I could use `.astro` files to mix layout files, extra HTML, and markdown content to build the final page. This also meant that I could import styles into specific pages as needed.

## Use the Platform
I really enjoy working with Astro, as it feels like it’s working *with* the web platform instead of against it. It’s written in JavaScript, but isn’t afraid of HTML. The best part is that after the site is built, it’s just HTML. It doesn’t require any JavaScript to run, and you can’t even tell that it was built with Astro.

As I’ve worked with Next.js a lot, I was assuming that metadata would be a **system**. I was delighted to find that I could simply set up meta tags in the root template and pass the data that I needed to them. I could customize and tweak in any way that I wanted.

## Tags
One of the hardest things to figure out when I was setting up Eleventy was tag archive pages. In fact, I just gave up on it for a while. They aren’t super important to me, so it wasn’t a big deal.

At first, it appeared that I was going to have the same issues with Astro. The docs seemed pretty light on the topic, but then I found that they had a whole section devoted to building a blog, with a [tutorial on tag pages](https://docs.astro.build/en/tutorial/5-astro-api/2/). Excellent! This helped me get them up and running pretty quickly. I ran into some issues with capitalization, but that’s for another day.