---
title: What makes for a good web component?
date: 2026-04-04T12:12:00 -5
tags: ['HTML', 'Web Components']
---
As I’ve recently gotten into web components, I was surprised to learn about what makes a good web component and what doesn’t. As most of us do, I went into it with a lot of experience with JavaScript frameworks, but web components are fundamentally different and have their own specific purpose.

## How much should a web component do?

Web components ([MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)) is a term that encompasses a group of features, and one of those is custom elements. When I think of web components, I think of custom elements. Because of the word “components,” I assumed that custom elements would be similar to other component patterns, which is a common misconception.

Custom elements work best when they are treated similarly to default elements (the ones available in all browsers, think `h2`, `p`, `img`). I often thought of the `img` element. It has a mix of required and optional attributes on it. It also doesn’t do too much. It does images, that’s it. Custom elements work best that way too. [Jeremy Keith has a good roundup of this mindset shift.](https://adactio.com/journal/20618)

I used the [Nord Design System](https://nordhealth.design) as inspiration as I was thinking about how I might break my custom elements up. Their system is made up of lots and lots of smaller [custom elements](https://nordhealth.design/components), which can be combined to create what we might think of as a “component.” If you look at the code for [this sign in form example in their Storybook](https://nordhealth.design/storybook/?path=/story/components-card--with-form), you can start to see how they’ve accomplished this.

## How do web components behave?

As I was coming at web components with the mindset of a JavaScript framework, I was thinking about a component as something that could have lots of arguments and would react to state changes. However, custom elements don’t do well with lots of arguments, as each argument need to be added to the DOM, like default elements. This clutters things up, which is different from a framework, where those arguments don’t necessarily end up in the markup.

Additionally, custom elements don’t have a concept of state out of the box. You place the markup for the component on the page, and when the JavaScript for it loads, it gets applied. For anything that needs to change after that, you would need to add handling yourself. Again, this is conceptually similar to the behavior of default elements.

There are some web component frameworks that add in the concept of state, such as [Lit’s reactive properties](https://lit.dev/docs/components/properties/). I haven’t used any of these frameworks yet, but just the addition of state would be really useful. Fortunately, most of these frameworks are really lightweight and could be useful and a performance win if you find yourself adding a lot of boilerplate code to your custom elements.