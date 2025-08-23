---
title: The broken trust of the back button
date: 2025-07-20T12:46:00 -5
tags: ['JavaScript']
---
One of the worst user experience offenses caused by the [JavaScript-ification](https://infrequently.org/series/reckoning/) of the web is a broken back button. In this environment, it’s _not_ the browser that fails to take the user back, it’s that developers have taken over control of what “back” means and how it behaves. When it fails, it’s often that either the history state gets messed up, or the previous state wasn't ever entered into the history state.

As a user, the most common instance of this happening is on e-commerce sites. Choose a product category, apply some filters, go to the second page of results, and then choose a product. Once there, you might change your mind, click on the back button, and you have no idea if you’ll land back where you were, or be taken back to the start with no filters or pagination applied.

I don’t understand why we’ve so willingly tossed out this basic functionality. Yes, we’ve had our reasons for using more JavaScript, but maintaining the basic functions of the browser is a base level expectation. We are creating a world in which users avoid the back button, assuming that it won’t behave as they want. Or they go ahead and use it, and end up frustrated that they’ve once again lost their place.

This quote from [Who's Afraid of a Hard Page Load?](https://unplannedobsolescence.com/blog/hard-page-load/) by Alexander Petros illustrates this experience clearly:

>If it’s an SPA, however, in all likelihood clicking the back button will take me a different, mostly blank page, and now I’m just stuck. When the internet comes back, I’ll refresh the page and hopefully land in the same place, but maybe not. In fact, my whole attitude towards a website changes if it feels like an SPA. Subconsciously, I know that I have to baby it, and only use it in the most optimal network conditions. The smoothness of a web application is an anti-indicator of its reliability and predictability as a web page.

Building products that behave consistently as expected builds trust with users. We, as a web industry, are eroding this trust on a massive scale. One way that we begin to fix this is to rely less on JavaScript for routing. If each “view” of a site is independently available, this ensures that a user has something to go back to. This means filters need to have unique URLs, paginated lists need to exist outside of a “load more” experience, and things like dialogs are only used for temporary controls or messaging. If that means we have to use much less JavaScript, all the better.