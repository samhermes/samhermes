---
title: My first npm package with Vite
date: 2026-09-27T16:28:00 -5
tags: ['JavaScript', 'CSS']
---
Getting a package published on npm has long been a mystery to me. There are too many little details that have to be just right, and I was confused about what the end product was even supposed to be.

Vite really gave me the push that I needed to bring it all together. It offers a [“library” mode](https://vite.dev/guide/build#library-mode), which handles some of the tricky bits behind the scenes. I think this is where I had given up in the past. It bundles the code and outputs it in two formats, which is good for compatibility.

Next, a key part is adding `"type": "module"` to the package.json file. [This is a signal to Node.js](https://nodejs.org/api/packages.html#type) to use the files you’ve created as a module, and allow those who’ve installed your package to import it in that way.

For the [Alexander package](https://www.npmjs.com/package/@samhermes/alexander) that I published, here’s the new entries in package.json that I made, including the `type`. This also shows the two formats that have been output, and I’ve included `files` here so that it will install both the `dist` and `scss` folder when someone adds it to their project (the Sass files can be imported directly).

```json
"type": "module",
"main": "dist/alexander.js",
"exports": {
  ".": {
    "import": "./dist/alexander.js",
    "require": "./dist/alexander.umd.cjs"
  }
},
"files": [
  "dist",
  "scss"
]
```

Once this was set up, I had to decide whether to [scope](https://docs.npmjs.com/cli/v12/using-npm/scope) the package or not. If scoped, that would mean it would live at `@[username]/[package-name]`. I had a generically-named package, so I decided to scope it. For this, I updated the `name` field of package.json to reflect the structure.

Now, to publish to npm, you just need to be signed in on the command line, and then run the [`publish`](https://docs.npmjs.com/cli/v12/commands/npm-publish) command.

Sign in with `npm login`, which will take you to your browser and back. Once that is complete, you’re ready to publish. In my case, because the package was scoped, I needed to specify that the package should be public. That can be done by running `npm publish --access public`.

To release a new version, the process is very easy. Just increase the version number in the package.json file, and then run the `publish` command the same way again.
