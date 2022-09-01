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
    title: "Sonr Docs",
    description: "The Internet rebuilt for you.",
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
        categories: true,
        items: {
          "/": "auto",
          "/Getting Started": {
            items: [
              {
                text: "Overview",
                link: "/general/getting-started.md",
              },
            ]
          },
          "/Modules": {
            items: [
              {
              text: "Registry (Account)",
                link: "modules/registry.html",
              },
              {
                text: "Schemas",
                link: "modules/schemas.html",
              },
              {
                text: "Buckets",
                link: "modules/buckets.html",
              },
              {
                text: "Channels",
                link: "modules/channels.html",
              },
            ],
          },
          "/motor-sdk": {
            items: [
              // SidebarLink
              {
                text: "Overview",
                link: "/motor-sdk/android/overview.html",
              },
              // SidebarMenu
              {
                text: "Android",
                collapsible: true,
                children: [
                  {
                    text: "Overview",
                    link: "/motor-sdk/android/overview.html",
                  },
                  {
                    text: "Getting Started",
                    link: "/motor-sdk/android/getting-started.html",
                  },
                  {
                    text: "Authentication",
                    link: "/motor-sdk/android/authenticate.html",
                  },
                  {
                    text: "Schemas",
                    link: "/motor-sdk/android/schemas.html",
                  },
                  {
                    text: "Documents",
                    link: "/motor-sdk/android/documents.html",
                  },
                  {
                    text: "Buckets",
                    link: "/motor-sdk/android/buckets.html",
                  },
                  {
                    text: "Updating Buckets",
                    link: "/motor-sdk/android/updating-buckets.html",
                  },
                  {
                    text: "Motoroid Reference",
                    link: "/motor-sdk/android/motoroid-reference.html",
                  },
                  {
                    text: "Document Builder Reference",
                    link: "/motor-sdk/android/document-builder-reference.html",
                  },
                  {
                    text: "Bucket Reference",
                    link: "/motor-sdk/android/bucket-reference.html",
                  },
                ],
              },
            ],
            style: "docs",
          },
        },
      },
      navbar: {
        items: [
          // NavLink
          {
            text: "Learn",
            link: "/general/what-is-sonr.html",
          },
          {
            text: "Build",
            link: "/motor-sdk/overview.html",
          },
          {
            text: "CLI",
            link: "/architecture/overview.html",
          },
        ],
      },
      // socials: {
      //   discord: "https://sonr.io/discord",
      //   twitter: "https://sonr.io/twitter",
      // },
      homePage: {
        heroText: "The Internet rebuilt for you",
        primaryActionText: "Get Started",
        primaryActionLink: "/general/getting-started.html",
        secondaryActionText: "Learn More",
        secondaryActionLink: "/general/what-is-sonr.html",
        features: [
          {
            title: "Web3 Integrations",
            body: "Sonr provides easy to use methods to interact with IPFS, Ethereum, and other blockchain networks.",
          },
          {
            title: "Universal SDK",
            body: "The Universal SDK is a set of libraries and tools that allow developers to easily interact with Sonr's blockchain.",
          },
          {
            title: "Cross Platform",
            body: "Sonr is available on desktop, mobile, and web. It's easy to use and easy to integrate with your existing applications.",
          },
        ],

        footer: "MIT Licensed | Copyright Sonr Inc. © 2022-present",
      },
      remoteGitRepo: {
        url: "https://sonr.io/github",
      },
    },
  },
});
