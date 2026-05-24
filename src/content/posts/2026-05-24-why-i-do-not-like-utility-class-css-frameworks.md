---
title: Why I don’t like utility class CSS frameworks
date: 2026-05-24T13:10:00 -5
tags: ['CSS']
---
See how I tried not to say Tailwind? Oh wait—oops, did it anyway.

## A subset of CSS

Why would I use a tool that limits the features available to me? I know all of CSS, and I’d like to use it, please. It’s the same reason why I don’t use Bootstrap on every website, it just simply doesn’t fill every use case, nor should it.

Tailwind is always going to trail behind CSS. Tailwind is always going to have difficulty creating complex selectors. You may say that you could just avoid creating those, but that leads me to my next point...

## Telling designers no

I love designers. I love working with them, I love their attention to detail, I love nerding out. It literally sustains me. Why would I use a tool where I have to tell a designer “no”? They want a one-off pixel value? They want an unusual layout? They want mobile and desktop to work differently from each other? Yeah, I’m going to go ahead and build that. Technology is a tool in service of UX.

It’s here that I agree with Tailwind purists. Using `@apply` is bad. Yes, you can use it to break out and implement one-offs. Yes, you can extend the framework, add your own variables. Push all of this too far, and I really don’t see why you’re using Tailwind. Regular CSS is so powerful now. We have fun things! Sass is barely even needed anymore.

## Junior developers

I don’t want someone coming into the web industry through Tailwind. It’s just like coming in through React. You’re going to mess up a bunch of stuff while you figure out what’s going on. It’s better that we stay closer to the platform when starting out, and although you may feel quite capable of using Tailwind, it’s going to be better for everyone to stay closer to CSS. We aren’t making decisions for just ourselves, we should think of those coming up.

## Consistency for consistency’s sake

Similar to React, these tools become “best practice” somehow, and then it is seen as weird if isn’t used. It moves into a space where no one is actually making a decision to use it, and then spreads from there. I like consistency, but not for bad ideas!

This creates an environment where team members have to know how to use Tailwind to do their job. Onboarding is more complicated. CSS is an expertise that can be used across frameworks and projects and doesn’t need translation. Onboard one time and you’re good.

## Documentation

If you customize Tailwind at all, the docs are suddenly wrong. Everything in the docs assumes the default config. Change the spacing and suddenly all of the examples in the docs are wrong. Don’t pay attention to those. And the problem is that the docs are needed to work with Tailwind. The naming conventions in Tailwind are so inconsistent. They’re inconsistent across the framework *and* they’re inconsistent with CSS.

## Extensions

Find a Tailwind example out in the wild? Well, hopefully you haven’t changed your config too much. If so, you’ll have missing colors, wonky spacing, etc. Tailwind is so tied to a specific config that chances are that you’ll need to do a lot of rework just to make things work in your own codebase. Not so efficient.

## Ignore the markup

Tailwind makes it even easier to ignore the markup that you’re writing. By placing so many classes in the markup, it muddies the water of what the generated markup is. CSS isn’t supposed to be in the markup for this reason, there should be a separation of concerns. We need more focus on good markup, and this gets in the way of that.

## A proliferation of components

Take, for example, a card component. A project might use a series of different layouts for this component, but the underlying markup is exactly the same. Tailwind pushes these out into multiple components, each with different classes for the layout. This encourages a lot of repetition and increases the likelihood for inconsistencies.

It’s so strange to me that there’s no built-in way to address this. `tailwind-merge` is a plugin that can get you part of the way there, but it creates an indeciperable mess if pushed too far. CSS itself is really good at this sort of thing. You can create a series of parent classes and apply them as appropriate based on where a component is used.