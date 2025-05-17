---
title: Creating the Scroll Snap Controls package
date: 2025-05-17T12:15:00 -6
tags:
  - JavaScript
  - CSS
---
I just released the first version of a new package, [Scroll Snap Controls](https://github.com/samhermes/scroll-snap-controls). It’s fairly simple, adding next and previous buttons to a container that uses CSS scroll snap. This allows us to provide a neat and tidy layout, shared between mobile and desktop, and still reach users without a way to horizontally scroll.

The package is designed for use with elements that horizontally scroll. In order to activate this, we need to use `overflow`. Even without using scroll snap, this can make it more difficult for users to access overflowed content. This is why we need to add our own navigation buttons to let them click to go back and forth.

While working on this, I learned about the emerging `::scroll-button()` spec ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-button)). At the moment, this is only available in Blink-based browsers, but if support expands, it will essentially make this package unnecessary. Woo CSS!

## Class vs function
I wanted to build this code in a way that would be super flexible, allowing it to be used in a variety of contexts. I also didn’t want to overdo it, as there are already a lot of good options out there for more advanced implementations.

I wrestled at first with how to structure the code. The first version I created used a class-based approach, neatly nesting all of the related functions inside. When attempting to use it in a demo, it felt like a little too much structure for my taste.

I ended up just creating a series of functions and bringing them together with an `init` function that I exported as the default. Modules are now widely supported, so it made sense to keep things simple.

## Modules
Working with a simple HTML document to work on the functionality of the plugin is an easy way to get started, but I found that I wanted to convert the code to a module. This doesn’t work when you just load a local file in your browser. I deployed the code to a hosted environment and continued working from there.

To use code as a module, it’s as simple as adding `type=“module”` to the `script` tag. This allows you to use `import` and other features inside of the code. For my demo page, I imported the script from the parent directory, and it works the same as when imported from a package.

## Creating a package
I’ve only made the code available on GitHub. npm maintains a way to install GitHub repositories as a package using the `<username>/<repo-name>#<version>` format.

In order for this to work, the repository does need a `package.json` file. This tells npm about the code and, most importantly, which file is the entry point. I only had one file, so I set this to `index.js`.

## CSS to the rescue
As previously mentioned, around the time I started working on this, I read about an initiative to bring these kinds of controls to CSS. It’s part of a new overflow spec, which focuses on adding navigation overflow elements. The main example is the [classic carousel](https://developer.chrome.com/blog/carousels-with-css), with next and previous buttons and pagination controls.

It’s really exciting to see this being worked on, especially for the enhanced accessibility that this will offer out of the box. It appears that this implementation will be really flexible, and I’m looking forward to trying these in out in real world use cases.

## This is all really confusing
Creating code in this sort of public-facing way is really confusing! How do people want to use this code? What should be supported? CommonJS or ES-something? Can I just leave it on GitHub or is it better to get it on npm? Why is getting something on npm so difficult? It’s all so flexible and open that it’s hard to know what the cow paths are. What do people do most often? I’m not sure.

As an attempt to learn more about what’s commonly done, I read [this article from Total Typescript about creating a package](https://www.totaltypescript.com/how-to-create-an-npm-package), and it’s sooo long! Oh my gosh! Especially for something that’s really small like the package I was working on, the effort is not worth it. I just left my code on GitHub, and I’ll come back to npm later.