// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Internet Rebuilt for you',
  staticDirectories: ['public', 'static'],
  tagline: 'Official documentation for the Sonr Platform',
  url: 'https://sonr.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sonr-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
  ],
  themes: [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sonr-io/docs/tree/dev/packages/create-docusaurus/templates/shared/',
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),

        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        //title: 'Sonr Docs',
        logo: {
          alt: 'Sonr Docs Logo',
          src: 'img/logo.svg',
          className: 'navbar-logo',
        },
        items: [
          {
            type: 'doc',
            docId: 'what-is-sonr',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docId: 'speedway/introduction',
            position: 'left',
            label: 'Build',
          },
          {
            type: 'doc',
            docId: 'motor-sdk/intro',
            position: 'left',
            label: 'Integrate',
          },
          {
            href: 'https://github.com/sonr-io/sonr',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6Z3RmWs257',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/sonr_io',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Architecture',
                href: 'https://github.com/sonr-io/sonr/blob/dev/docs/architecture/GUIDE.md',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/sonr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Homepage',
                href: 'https://www.sonr.io',
              },
              {
                label: 'Contact Us',
                href: 'mailto:team@sonr.io',
              }
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "scala", "dart", "protobuf", "swift"],
      },
    }),
};

module.exports = config;
