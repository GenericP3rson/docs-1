import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig, clientPlugin } from "@vitebook/client/node";
import { svelteMarkdownPlugin } from "@vitebook/markdown-svelte/node";
import { shikiMarkdownPlugin } from "@vitebook/markdown-shiki/node";
import {
  DefaultThemeConfig,
  defaultThemePlugin,
} from "@vitebook/theme-default/node";

export default defineConfig<DefaultThemeConfig>({
  include: ["src/**/*.md", "src/**/*.story.svelte"],
  plugins: [
    shikiMarkdownPlugin(),
    svelteMarkdownPlugin(),
    clientPlugin({ appFile: "App.svelte" }),
    defaultThemePlugin(),
    svelte({
      compilerOptions: {
        hydratable: true,
      },
      extensions: [".svelte", ".md"],
      experimental: {
        // Remove if using `svelte-preprocess`.
        useVitePreprocess: true,
      },
    }),
  ],
  site: {
    title: "Vitebook",
    description: "Blazing fast Storybook alternative.",
    theme: {
      markdown: {
        toc: true,
        editLink: true,
        editLinkText: "Edit this page on GitHub",
        lastUpdated: true,
        nextLink: true,
        prevLink: true,
      },
      sidebar: {
        style: "docs",
      },
      navbar: {
        items: [
          // // NavMenu
          // {
          //   text: "Motor SDK",
          //   menu: [
          //     {
          //       text: "Product A",
          //       link: "/products/a.html",
          //     },
          //     {
          //       text: "Product B",
          //       link: "/products/b.html",
          //     },
          //   ],
          // },
          // // NavMenu
          // {
          //   text: "Motor SDK",
          //   menu: [
          //     {
          //       text: "Product A",
          //       link: "/products/a.html",
          //     },
          //     {
          //       text: "Product B",
          //       link: "/products/b.html",
          //     },
          //   ],
          // },
          // NavLink
          {
            text: "Getting Started",
            link: "/Button",
          },
        ],
      },
      socials: {
        discord: "https://sonr.io/discord",
        twitter: "https://twitter.com/sonr_io",
      },
      homePage: {
        heroText: "Next Generation Frontend Tooling",
        primaryActionText: "Get Started",
        primaryActionLink: "/building-on-the-highway/getting-started.html",
        secondaryActionText: "Learn More",
        secondaryActionLink: "/what-is-sonr.html",
        features: [
          {
            title: "Instant Server Start",
            body: "On demand file serving over native ESM, no bundling required!",
          },
          {
            title: "Lightning Fast HMR",
            body: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
          },
          {
            title: "Rich Features",
            body: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
          },
        ],

        footer: "MIT Licensed | Copyright Sonr Inc. © 2022-present",
      },
      remoteGitRepo: {
        url: "https://github.com/sonr-io/sonr",
      },
    },
  },
});
