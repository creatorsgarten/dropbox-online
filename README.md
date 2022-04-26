# Polaryz's Online Dropbox system

## 🪄 Styling system 🪄

- https://tailwindcss.com

## ♻️ State management ♻️

We are currently using the svelte's native stores module, which is adhering to [the Publish-subscribe design pattern](https://en.wikipedia.org/wiki/Publish–subscribe_pattern)

![Publish-subscribe pattern visualization](https://cdn.thenewstack.io/media/2020/07/24f1f6ae-ably1.png)
<br /> the above info-graphic is stolen from https://thenewstack.io/publish-subscribe-introduction-to-scalable-messaging/

Svelte has different types of stores that can be used in different state circulation scenario. There are read-only data stores, data stores that can be changed, and data stores that are based on other data. Here, you can [read about each example of how to use it](https://svelte.dev/tutorial/writable-stores).

## ⚛️ ⚛️ Reactive expression as svelte's characteristic ⚛️ ⚛️

If you look closely [at the page with a number of states to manage](src/routes/Profile.svelte), you may notice some puzzling symbols. Particularly, the dollar sign `$:`. Or you may have tried searching for `setState()` in the codebase and found nothing.

This is how svelte becomes svelte: it reduces the number of reactive [prologues and epilogues](https://en.wikipedia.org/wiki/Function_prologue_and_epilogue). Only keep the symbols that are absolutely necessary for reactivity in all modules.

- What the heck is dollar sign? 👉🏻 👉🏼 👉🏽 https://svelte.dev/tutorial/reactive-declarations
- `SetState()`: Are there any more `SetState()` occurrences? 💾 https://svelte.dev/tutorial/reactive-assignments

## Typescript 💻

- TODO

Best wishes, and most importantly, have fun while tapping the keyboard to contribute to our website. 💓💗💖

# Svelte's legacy documentation

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
