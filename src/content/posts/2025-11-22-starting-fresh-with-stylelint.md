---
title: Starting fresh with Stylelint
date: 2025-11-22T12:25:00 -6
tags: ['CSS']
---
I’ve worked on many a project with an existing Stylelint config, and have worked to maintain consistency with the rules of the specific project. That is certainly familiar territory. What I haven’t done is a real deep dive into how *I* would set up Stylelint from the start, and an exploration of some of the questions that come up when you’re starting fresh.

I first started by installing the `stylelint` package through NPM. That, however, was a little too eager. I knew too much. Instead, there’s a tool that handles the install and setup for you! You can run `npm create stylelint@latest` and that will walk you through some steps.

## Sass

The first thing I ran into was that the default config that comes with Stylelint is for CSS. This is still a Sassy world, baby, so I installed the Sass version of the config, like so:

```
npm install stylelint-config-standard-scss
```

Then I updated the config file to use `stylelint-config-standard-scss` in `extends` and then uninstalled the `stylelint-config-standard` package that had been installed during setup.

Likewise, the command to run Stylelint on Sass files needs to use the `.scss` extension instead of just `.css`, like `stylelint "**/*.scss"`.

Okay, let’s get into actually running the tests.

## :not()

One of the first rules that I ran into was a rather minor `selector-not-notation`. I was chaining together several `:not` rules like `:not(.this):not(.that)`, which is apparently not “modern.” Frustratingly, Stylelint makes you choose one approach or the other. I needed to update all my `:not` usage or update the rule.

## rgba()

Next up, I got feedback about my usage of `rgba()`. Interesting. I did not know that we had thoughts about `rgba()`. Apparently the preference is to use `rgb()`, and the [Stylelint docs](https://stylelint.io/user-guide/rules/color-function-alias-notation/) point to the [rgb() page on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb) to justify this. Fair enough, it does say that `rgb()` is recommended instead of `rgba()`, but there’s no explanation given there. Now I’m just curious.

Related to this, I find it unsatisfying that the Stylelint docs present things without explanation, in a mechanical way. It makes me want to just turn off the rule. I don’t know how they arrived at the recommendation they did. I guess it’s more about picking _something_ rather than having an inconsistent approach.

I do like that Stylelint seems to be encouraging the latest approach. I’m not sure that it should be forced, but I guess a heavy hand works well. Running it over code catches those instances where maybe you don’t need a hack that you needed before, or the name of a property has been standardized. In my case, `grid-gap` could be updated to `gap`. That’s a helpful suggestion.

## Unintended changes in functionality

Inevitably, making a code change to adhere to the Stylelint standards will result in a different output than before. Some of these are minor, but some of them break things. It’s hard to catch these without careful review of a site. Even in smaller cases like the `rgba()` update, you can accidentally end up with a different color output pretty easily, which could be a pretty dramatic bug if used in a background or other large element.

Stylelint is often used in pull request tests, preventing code from being merged until the issues have been resolved. This is great for the consistency across a codebase, but can mean introducing bugs at the worst possible moment. The code has potentially been reviewed by all the necessary stakeholders, and an innocent change could mean an immediate hotfix.

## node_modules size

As with most things, installing Stylelint adds a bunch of packages to your project. I would say an alarming number of packages. Looking at the diff of the lock file after installing was painful, as it’s annoying to be adding such a huge number of packages for such a minor feature. I would imagine that Stylelint would be light and small, since it runs so quickly, but I suppose it takes a lot to have so much versatility. I’m curious if there is a lighter weight way to get the same result.

## Integrating with code editor formatting

In VS Code, you can format the current file using the Option-Shift-F shortcut. This uses the editor’s settings to apply formatting, which can be different from what Stylelint is looking for. Additionally, it applies some updates that I don’t like. I wanted to sync these with the Stylelint config, but I haven’t been able to find a way to do this. For the time being, I have updated the following settings:

[  ] SCSS › Format: Newline Between Rules - checked by default
[x] SCSS › Format: Space Around Selector Separator - unchecked by default

Information about these settings can be found in [Formatting docs for VS Code](https://code.visualstudio.com/Docs/languages/CSS#_formatting).

## My config

Here’s the config that I ended up with at the end of this exercise. I expect that it will evolve over time, but this seems like a good starting place for now. I started to explore what other rules I might adjust or apply, but it’s pretty overwhelming to approach it that way. I think that addressing things as they come up in a project is a more reasonable way to go.

```js
export default {
  "extends": ["stylelint-config-standard-scss"],
  "rules": {
    "media-feature-range-notation": null,
    "value-keyword-case": [
      "lower",
      {
        "camelCaseSvgKeywords": true
      }
    ],
    "no-descending-specificity": null,
    "no-invalid-position-at-import-rule": null,
  },
};
```

`media-feature-range-notation` and `no-invalid-position-at-import-rule` are like a backwards compatibility thing, as these updates came from existing code that I wanted to keep the way that it is.

`camelCaseSvgKeywords` came from wanting to keep `currentColor` instead of updating it to `currentcolor`. A small thing, but I much prefer the camel case.

`no-descending-specificity` is a weird one to me, it was giving errors in places that did not seem to pose an issue at all. The docs speak to this, but I felt it was better to just disable.