/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Get protodocs sidebar items from genSidebarsProtodocs.js

  // By default, Docusaurus generates a sidebar from the docs folder structure
  motorSidebar: [
    'motor-sdk/intro',
    {
      type: 'category',
      label: 'Authorization',
      collapsed: false,
      items: ['motor-sdk/auth/register', 'motor-sdk/auth/login'],
    },
    {
      type: 'category',
      label: 'Managing Data',
      collapsed: false,
      items: ['motor-sdk/data/schemas', 'motor-sdk/data/documents'],
    },
    {
      type: 'category',
      label: 'Utilizing Storage',
      collapsed: false,
      items: ['motor-sdk/storage/buckets', 'motor-sdk/storage/updating-buckets',],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: ['motor-sdk/reference/go', 'motor-sdk/reference/java', 'motor-sdk/reference/dart'],
    },
  ],

  // But you can create a sidebar manually
  highwaySidebar: [
    'what-is-sonr',
    {
      type: 'category',
      label: 'Modules',
      collapsed: false,
      items: ['highway/modules/registry', 'highway/modules/schemas', 'highway/modules/buckets', 'highway/modules/objects',],
    }
  ],
  speedwaySidebar: [
    'speedway/introduction',
    'speedway/getting-started',
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   collapsed: false,
    //   collapsible: false,
    //   items: [
    //     'speedway/cli-example',
    //     //'speedway/flutter-example',
    //   ],
    // },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      collapsible: false,
      items: ['speedway/cli-cmds', 'speedway/routes'],
    },
  ],
};


module.exports = {
  docs: {
    Docusaurus: ['introduction', 'design-principles', 'contributing'],
    'Getting Started': ['installation', 'configuration'],
    Guides: [
      'creating-pages',
      'styling-layout',
      'static-assets',
      {
        type: 'category',
        label: 'Docs',
        items: ['markdown-features', 'sidebar', 'versioning'],
      },
      'blog',
      'search',
      'deployment',
      'migrating-from-v1-to-v2',
    ],
    'Advanced Guides': ['using-plugins', 'using-themes', 'presets'],
    'API Reference': [
      'cli',
      'docusaurus-core',
      'docusaurus.config.js',
      'lifecycle-apis',
      'theme-classic',
    ],
  },
};


//module.exports = sidebars;
