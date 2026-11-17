---
title: Good front end is accessible front end
date: 2026-11-16T20:50:00 -6
tags: ['Product', 'Accessibility']
---
We’re at the point where the measure of good front end code always includes accessibility. Still, we’re often measuring and talking about accessibility as a separate concern, when it should be something we’re considering from the very start of a project.

We’ve never really had a solid measure of good front end code. We can look at [Lighthouse](https://developer.chrome.com/docs/lighthouse/), which [has been shown to be easily manipulated](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/). We can think of [Typescript](https://www.typescriptlang.org), which improves reliability. We can think of [Playwright](https://playwright.dev), which tests that our applications work as we expect. We can even run [Axe](https://www.deque.com/axe/devtools/) tests on our pull requests. At the end of the day, each of these tools can only go so far and only cover part of the whole. It’s very easy to end up in a situation where there’s no step in the process to say “hey, this doesn’t pass!”

The hard thing about this that accessible front end code is very contextual. It’s different on each project and can even be different across very similar patterns within the same project. Each design that we create has different accessibility considerations. There’s no surefire way to test that, as the tests need to be defined each time. We have to really inhabit it, and we should always be doing that.

## Using requirements to make this happen

When we’re scoping out work, accessibility concerns should be included alongside other requirements. Instead of creating a separate task or making a separate list, embed it in the rest of the requirements.

Using appropriate markup is simply a good requirement, and something we should be doing always. Similarly, being able to use a feature just with a keyboard can stand alone as a requirement. These things check the boxes for accessibility, but when we treat them as basic requirements, we ensure that they get done.

If we separate out accessibility as a separate task, we open the opportunity to skip it. When the deadline is approaching, or we’re otherwise looking to cut scope, it’s often one of the first things to go.

Additionally, it’s much easier to include accessibility in small bites along the way. We don’t have to rework anything at the end, which means the overall effort is much lower, and we can negotiate any difficult features while the work is fresh.

## Baking accessibility testing into the QA process

There’s a risk of accessibility work disappearing when we stop talking about it as a separate requirement. This is where the QA process comes in. We should verify that all of our basic requirements have come together to create something that meets our accessibility standards.

Additionally, by specifying how to test a feature for accessibility, we can bring in other people who are less familiar with what accessibility means. Getting a hands-on experience of enabling a screen reader or just using a keyboard to navigate a page develops a first-hand experience of why decisions were made the way they were.