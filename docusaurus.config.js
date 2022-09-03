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
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    "posthog-docusaurus",
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: ['docs', 'protodocs'],
        docsDir: ['docs', 'protodocs'],
        indexBlog: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/protodocs/registry/tx.proto',
            from: '/api',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/api/registry')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/api/registry', '/protodocs/registry/tx.proto'),
              existingPath.replace('/api/registry/tx', '/protodocs/registry/tx.proto'),
              existingPath.replace('/api/registry/query', '/protodocs/registry/query.proto'),
              existingPath.replace('/api/registry/genesis', '/protodocs/registry/genesis.proto'),
              existingPath.replace('/api/registry/params', '/protodocs/registry/params.proto'),
              existingPath.replace('/api/registry/who_is', '/protodocs/registry/who_is.proto'),
              existingPath.replace('/api/registry/did', '/protodocs/registry/did.proto'),
            ];
          }
          if (existingPath.includes('/api/schema')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/api/schema', '/protodocs/schema/v1/tx.proto'),
              existingPath.replace('/api/schema/tx', '/protodocs/schema/v1/tx.proto'),
              existingPath.replace('/api/schema/query', '/protodocs/schema/v1/query.proto'),
              existingPath.replace('/api/schema/genesis', '/protodocs/schema/v1/genesis.proto'),
              existingPath.replace('/api/schema/params', '/protodocs/schema/v1/params.proto'),
              existingPath.replace('/api/schema/what_is', '/protodocs/schema/v1/what_is.proto'),
            ];
          }
          if (existingPath.includes('/api/bucket')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/api/bucket', '/protodocs/bucket/tx.proto'),
              existingPath.replace('/api/bucket/tx', '/protodocs/bucket/tx.proto'),
              existingPath.replace('/api/bucket/query', '/protodocs/bucket/query.proto'),
              existingPath.replace('/api/bucket/genesis', '/protodocs/bucket/genesis.proto'),
              existingPath.replace('/api/bucket/params', '/protodocs/bucket/params.proto'),
              existingPath.replace('/api/bucket/where_is', '/protodocs/bucket/where_is.proto'),
            ];
          }
          if (existingPath.includes('/api/service')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/api/service', '/protodocs/service/v1/discover.proto'),
              existingPath.replace('/api/service/discover', '/protodocs/service/v1/discover.proto'),
              existingPath.replace('/api/service/exchange', '/protodocs/service/v1/exchange.proto'),
              existingPath.replace('/api/service/transmit', '/protodocs/service/v1/transmit.proto'),
            ];
          }
          if (existingPath.includes('/api/motor')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/api/motor', '/protodocs/motor/v1/request.proto'),
              existingPath.replace('/api/motor/request', '/protodocs/motor/v1/request.proto'),
              existingPath.replace('/api/motor/response', '/protodocs/motor/v1/response.proto'),
            ];
          }
          if (existingPath.includes('/api/common')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/api/common', '/protodocs/common/v1/info.proto'),
              existingPath.replace('/api/common/info', '/protodocs/common/v1/info.proto'),
              existingPath.replace('/api/common/ipns', '/protodocs/common/v1/ipns.proto')
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
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
    [
      'docusaurus-protobuffet',
      {
        protobuffet: {
          fileDescriptorsPath: './fixtures/proto_workspace.json',
          protoDocsPath: './protodocs',
          sidebarPath: './genSidebarsProtodocs.js',
        },
        docs: {
          sidebarPath: './sidebarsProtodocs.js',
        },
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      posthog: {
        apiKey: process.env.POSTHOG_KEY || 'posthog-key',
      },
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
            to: 'protodocs/registry/tx.proto',
            activeBasePath: 'protodocs',
            label: 'API Explorer',
            position: 'right',
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
