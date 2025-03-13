---
title: The tension between modularity and accessibility
date: 2024-08-10T12:45:00 -5
tags:
  - Accessibility
  - JavaScript
  - HTML
selected: true
---
Modularity is everywhere. It's React components. It's packages. It's WordPress blocks. The web has been fully modularized. I've done my fair share of adding to this, and while it's really good for organizing code and for project management, it can often be detrimental for users. Especially when used in places where it isn't really needed.

External dependencies often make this problem even worse. When we bring in a package because we need a feature, we're also reliant on the accessibility of that code. Often, the functionality that we're after is so tightly coupled with the markup and styles that are provided, it can be impossible to work around it.

## Accessibility is about context

In order to improve accessibility, we often need to be adaptable based on context. In the simplest case, this is about what markup we use. It could be heading level, wrapping element, even IDs. Taking a modular approach, it can be really difficult to be adaptable based on context. It might require extra properties on a component, or additional variations.

If I create a card component, I'll likely choose a `div` to wrap it. I'll usually pick a `h2` for the heading. These both work pretty good for most cases. However, if there are many cards in a group, it would be better to wrap the card in a `li` as part of a `ul`. Additionally, that group of cards could be one of many groups, each with a heading. In that case, we should use a `h3` in each card. Suddenly, this simple component is getting complicated.

## Accessibility is about the page as a whole

Accessibility requires that you orchestrate coordination between components, which is more difficult in a modular approach. If one component should close when another opens, or a focus state should be passed from one component to another on an event, it requires hoisting behavior up really high in the tree, or concocting complex logic in each component.

In vanilla JS, it's much easier to apply these page-wide updates. This can be seen as "wrong" or "unsafe," but many websites are not so complicated that they benefit from completely avoiding whatever dangers may lurk.

## Accessibility should be easy

The reason that I make this argument is that it feels that we are headed in a direction where it's harder than before to make accessible websites. We should be headed in the opposite direction, where accessibility happens easily, almost without even thinking about it.

If our modular tools evolve to more easily enable accessibility, then that's great. I don't see that happening though, as modularity usually comes alongside a more strict environment, so it would go against the nature of the approach.

## What to do instead

The web is a messy platform. Our job as developers is to handle that messiness, allow things to be tightly coupled. If the end product is accessible, that's the real goal. If our code is perfectly clean and orderly, it's really likely that it's been at the sacrifice of a user. That's just the nature of this imperfect platform.

What's most important is to get closer to the platform again. Get closer to HTML and CSS, and make sure that you understand what is being served to the user. Test code thoroughly. Start your work with the end markup and add functionality on top of it. Add comments to your code where it gets to be complex.

I prefer to have a set of helper functions and starter components to use and adapt on a per-project basis. Of course, with a deadline, we often need something to start with quickly, but we should be okay with customizing and creating one-offs. Wait to modularize until you're sure you need it.