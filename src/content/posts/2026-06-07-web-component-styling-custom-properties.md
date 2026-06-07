---
title: Web Component styling with custom properties
date: 2026-06-07T13:55:00 -5
tags: ['Web Components', 'CSS']
---
When you are creating a web component, you may want to expose certain properties to outside styling. For this, custom properties are a great tool. For example, you could set a background color inside of the web component itself, but open it up to outside customization. Additionally, custom properties provide a fallback method, which is a great way to set your own defaults.

In the custom elements styles, this might look like:

```css
:host {
	background-color: var(--background-color, purple);
}
```

Then, by targeting the name of the custom element, you could set the updated value. This could be applied outside of the shadow DOM, meaning you’ve crossed the shadow DOM barrier.

```css
my-custom-element {
	--background-color: pink;
}
```

Alternatively, you could set the custom properties at the root of the document. In this case, it’s probably better to prefix the custom property names to avoid collisions with other custom properties that might be on the page.

```css
:root {
	--my-custom-element--background-color: pink;
}
```

This method could get out of hand after too many custom properties, at which point it probably makes more sense to apply styles to the element itself as usual. This can be done by targeting the custom element directly and with `::part()` to target those inner elements that have been opened up.
