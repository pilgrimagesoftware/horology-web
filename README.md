# Horology Web

[![CI](https://github.com/pilgrimagesoftware/horology-web/actions/workflows/ci-node.yaml/badge.svg)](https://github.com/pilgrimagesoftware/horology-web/actions/workflows/ci-node.yaml)
[![Preview Deployment](https://github.com/pilgrimagesoftware/horology-web/actions/workflows/deploy-vercel-preview.yaml/badge.svg)](https://github.com/pilgrimagesoftware/horology-web/actions/workflows/deploy-vercel-preview.yaml)
[![License](https://img.shields.io/github/license/pilgrimagesoftware/horology-web.svg)](https://img.shields.io/github/license/pilgrimagesoftware/horology-web.svg)
[![Issues](https://img.shields.io/github/issues/pilgrimagesoftware/horology-web.svg)](https://img.shields.io/github/issues/pilgrimagesoftware/horology-web.svg)
[![PRs](https://img.shields.io/github/issues-pr/pilgrimagesoftware/horology-web.svg)](https://img.shields.io/github/issues-pr/pilgrimagesoftware/horology-web.svg)
[![Dependabot](https://badgen.net/github/dependabot/pilgrimagesoftware/horology-web)](https://badgen.net/github/dependabot/pilgrimagesoftware/horology-web)

A web frontend for Horology.

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

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
