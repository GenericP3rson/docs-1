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
          /** Commenting out highway until we have more information on it */
          // "/highway": {
          //   items: [
          //     // SidebarLink
          //     {
          //       text: "What is Sonr?",
          //       link: "/highway/what-is-sonr.html",
          //     },
          //     // SidebarLink
          //     {
          //       text: "Getting Started",
          //       link: "/highway/getting-started.html",
          //     },
          //     // SidebarMenu
          //     {
          //       text: "Modules",
          //       collapsible: false,
          //       children: [
          //         {
          //           text: "Registry",
          //           link: "/highway/modules/registry.html",
          //         },
          //         {
          //           text: "Schemas",
          //           link: "/highway/modules/schemas.html",
          //         },
          //         {
          //           text: "Buckets",
          //           link: "/highway/modules/buckets.html",
          //         },
          //         {
          //           text: "Channels",
          //           link: "/highway/modules/channels.html",
          //         },
          //       ],
          //     },
          //     // SidebarMenu
          //     {
          //       text: "Services",
          //       collapsible: true,
          //       children: [
          //         {
          //           text: "IPFS",
          //           link: "/highway/services/ipfs.html",
          //         },
          //         {
          //           text: "Matrix",
          //           link: "/highway/services/matrix.html",
          //         },
          //         {
          //           text: "HNS",
          //           link: "/highway/services/hns.html",
          //         },
          //         {
          //           text: "Libp2p",
          //           link: "/highway/services/channels.html",
          //         },
          //       ],
          //     },
          //   ],
          //   style: "docs",
          // },
          "/motor-sdk": {
            items: [
              // SidebarLink
              {
                text: "Overview",
                link: "/motor-sdk/overview.html",
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
                ],
              },
            ],
            style: "docs",
          },
          "/architecture": {
            items: [
              // SidebarLink
              {
                text: "Overview",
                link: "/architecture/overview.html",
              },
              {
                text: "1. Decentralized Identifiers",
                link: "/architecture/adr-001.html",
              },
              // SidebarLink
              {
                text: "2. Verifiable Type Definitions",
                link: "/architecture/adr-002.html",
              },
              {
                text: "3. User and App Specific Storage",
                link: "/architecture/adr-003.html",
              },
              {
                text: "4. Peer-to-Peer Streams",
                link: "/architecture/adr-004.html",
              },
              {
                text: "5. NFT Standard",
                link: "/architecture/adr-005.html",
              },
              {
                text: "6. Invokable Functions",
                link: "/architecture/adr-006.html",
              },
            ],
          },
        },
      },
      navbar: {
        items: [
          // NavLink
          {
            text: "Learn",
            link: "/highway/what-is-sonr.html",
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
        primaryActionLink: "/highway/getting-started.html",
        secondaryActionText: "Learn More",
        secondaryActionLink: "/highway/what-is-sonr.html",
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
