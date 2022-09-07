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
module.exports = {
  docs: {
    Introduction: ['main', 'basics/components', 'basics/features'],
    'Getting Started': [
      'guides/overview',
      'guides/install',
      'guides/setup',
      {
        type: 'category',
        label: 'Authorization',
        collapsed: false,
        collapsible: false,
        items: ['guides/auth/register', 'guides/auth/login'],
      },
      {
        type: 'category',
        label: 'Managing Data',
        collapsed: false,
        collapsible: false,
        items: ['guides/data/schemas', 'guides/data/documents'],
      },
      {
        type: 'category',
        label: 'Utilizing Storage',
        collapsed: false,
        collapsible: false,
        items: ['guides/storage/buckets', 'guides/storage/fetch',],
      },
    ],
    'API Reference': [
      {
        type: 'category',
        label: 'CLI',
        collapsed: false,
        items: [
          'reference/speedway/cli',
          'reference/speedway/routes',
        ],
      },
      {
        type: 'category',
        label: 'Motor SDK',
        collapsed: false,
        items: [
          'reference/motor/go',
          'reference/motor/java',
          'reference/motor/dart',
        ],
      },
      {
        type: 'category',
        label: 'Modules',
        collapsed: false,
        items: [
          'reference/modules/registry',
          'reference/modules/schemas',
          'reference/modules/buckets',
          'reference/modules/objects',
        ],
      },

    ],
  },
};
