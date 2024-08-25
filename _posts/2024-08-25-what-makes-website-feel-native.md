---
title: What makes a website feel native?
date: 2024-08-25T14:17:00 -6
tags:
  - HTML
  - Accessibility
  - JavaScript
---
There are a lot of pieces that go into making a good website. The design, the content, the UX. Each of these need to come together in harmony to meet users where they are. The piece of this that I'm most interested in, naturally, is the front end development part. This is really where all of the other disciplines meet, and can really make or break a site. To this end, I think that it's a sense of a site feeling "native" that measures how successful it is. So, what makes a website native?

In general, what "native" means in this context is in browser. Is the site working with the browser or against it. Of course, the browser is forgiving, and very backwards compatible, so "native" does have a recency about it. It's about taking advantage of the new features that are widely supported, while also respecting the basics.

## Navigation
A native website should take full advantage of the browser's navigation tools. Using the back and forward buttons should go back and forward. Opening a link in a new tab or window should open the expected page.

Too often, single page apps break the back and forward actions. The history state can easily be messed up, causing a user to lose their place. Typically, serving pages from the server is a better bet.

## Pixel independent
We now live a world with a great variety of pixel density screens. Part of making a website feel native is to serve the right quality of graphic to the right screen. Responsive images help a great deal with this, allowing the user to only download the highest quality graphic that their screen supports.

I love using SVGs to simplify this problem, at least as far as vector graphics go. A single asset will display as crisp as possible on any screen, and can be made to be really small. Additionally, we can adjust the colors in the SVG using CSS, so a single file can support light and dark mode, or cases where it should appear on a dark background in one part of the page and on a light background in another.

## Smooth animations
Browsers have very real limitations on performance, and for good reason. An expensive animation can use a lot of resources, so understanding what those limits are can keep an animation smooth.

The most difficult part of this one is the great variability in resources. A lower powered device needs to play the same animations as a higher power device. In general, this means that you'll likely need to get creative, or settle for a less complex animation. If you've visited apple.com before, you'll know what happens when you don't settle.

## Accessible
An accessible website uses the platform properly, so a native website is using good markup, the styles aren't getting in the way, and JavaScript has considered screen reader usage.

## Responsive
An obvious entry, but it's important to remember that the user's viewport can be any size. The possibilities are astounding. The layout of the website should adapt to all of those. Some websites are obviously designed for just "mobile" and "desktop," and not much else. Using one of these sites on a tablet can be difficult. If on a tablet, the site is serving up a mobile layout, it's likely that space isn't being used very well, and font sizes are likely too small.

To feel native, we should think about how best to support the spectrum of screen sizes. Using a series of breakpoints works great for this, or we can take advantage of dynamic units, like `vh`, `ch`, or percentages.

## Easily shareable
Me, talking about sharing things? More likely than you think. This really connects back into the JavaScript of it all. Is there a way to share an individual piece of content? Can the user get to a place where they can share just what they want to share? In a single page app, this can go sideways easily, where the share link just takes someone to the start of the app, or to the entire page.

## Familiar
Last but not least, does the website use familiar patterns? This one is much harder to define, because it's quite social. What one person finds familiar isn't what another does. However, if we use common patterns that are used by many websites, we have a greater sense of a website feeling native. Unusual interactions can throw users off, and make it feel like a website is bad.