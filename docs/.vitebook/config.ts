import preact from "@preact/preset-vite";
import { shikiMarkdownPlugin } from "@vitebook/markdown-shiki/node";
import { clientPlugin, defineConfig } from "@vitebook/client/node";
import { preactMarkdownPlugin } from "@vitebook/markdown-preact/node";
import { preactPlugin } from "@vitebook/preact/node";
import {
  defaultThemePlugin,
  DefaultThemeConfig,
} from "@vitebook/theme-default/node";

export default defineConfig<DefaultThemeConfig>({
  include: ["src/**/*.md", "src/**/*.story.{js,jsx,ts,tsx}"],
  plugins: [
    preactMarkdownPlugin(),
    shikiMarkdownPlugin(),
    preactPlugin({ appFile: "App.tsx" }),
    clientPlugin(),
    defaultThemePlugin(),
    preact({ include: /\.([j|t]sx?|md)$/ }),
  ],
  site: {
    title: "Sonr Docs",
    description: "Docs for the future of the internet.",
    theme: {
      remoteGitRepo: {
        url: "sonr-io/docs",
      },
    },
  },
});
