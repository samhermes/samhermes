---
title: Adventures in Web Component styling
date: 2026-04-16T20:47:00 -5
tags: ['Web Components', 'CSS']
---
One of my favorite things about web components is the possibilities they open up for styling. Through the shadow DOM, we can have finer control than usual over how an element fits in to a project’s ecosystem.

With this, it does require learning how everything works first! We haven’t had anything like this in the web platform before, so it takes a while to get used to. Here’s some things that I learned as I got into it.

## The shadow DOM is optional

As I approached web components, I assumed that the shadow DOM was inherent to custom elements. However, it is not! It is totally optional. You could create a custom element and it would behave like any other element on the page.

The shadow DOM is most useful if you’re creating a component that might be used in an unknown context or otherwise want to encapsulate its styling. If you’re adding a web component to an existing project, it might actually create an unnecessary limitation.

## An open or closed shadow DOM has nothing to do with styles

Another thing I was surprised to find was that the `open` or `closed` [mode](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#mode) on the shadow DOM does not affect styling. It communicates the availability of the interior elements to JavaScript.

My outsider perspective assumed that `open` would mean that global styles could reach the elements, and that `closed` would mean that you would be starting fresh in that context. However, not the case!

## Inheritable styles apply to the shadow DOM

This one was hard to figure out. Global styles like the `font-family` on the `body` element will be applied to the shadow DOM. This means that a custom element can settle into a page nicely without extra effort, but you might also find that you’re getting outside styles that you don’t want. This can be remedied by applying `all: initial` and starting fresh, or just overriding the styles you don’t want inherited.

## Styles via `<style>`

This is the CSS-in-JS that I’m here for. You can add styles inside of a shadow DOM using a `<style>` tag. These styles will be only applied to the elements inside of the shadow DOM, so you don’t need to use highly specific selectors.

To target the custom element itself, there is the `:host` pseudo class. As the styles are defined inside of the custom element, `:host` allows you to reach up a level in a way you otherwise wouldn’t be able to.

I like to use Sass, so I was immediately interested to see if I could use Sass and then inject that into the `<style>` tag. Using Vite, I was able to use [the `?inline` parameter](https://vite.dev/guide/assets#explicit-inline-handling) on the stylesheet import, which prepared the styles to be inlined. Then, I created the `style` tag element using `createElement`, added the styles as inner text content, and appended it to the shadow DOM. Magic!

## Exposing elements to exterior styling with `part`

The `part` attribute allows for an element to be targeted from outside the bounds of the shadow DOM (or inside it, if you fancy). This can be done with `::part()`. The name of the part is passed in as an argument, so you might do something like:

```css
my-custom-element::part(header) {
  border-bottom: 1px solid pink;
}
```