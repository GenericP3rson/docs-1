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
    Introduction: [
      'main', 
      'intro/concepts',
      {
        type: 'category',
        label: 'Modules',
        collapsed: true,
        items: [
          'intro/modules/registry',
          'intro/modules/schemas',
          'intro/modules/objects',
          'intro/modules/buckets',
        ],
      },
      {
      type: 'link',
      label: 'Tokenomics',
      href: 'https://sonr.money',
    },],
    'Getting Started': [
      'guides/define',
      'guides/setup',
      {
        type: 'category',
        label: 'Authorization',
        collapsed: false,
        collapsible: false,
        items: ['guides/auth/register', 'guides/auth/login', 'guides/auth/alias'],
      },
      {
        type: 'category',
        label: 'Issue Payments',
        collapsed: false,
        collapsible: false,
        items: ['guides/payments/issue', 'guides/payments/peers'],
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
    'Tools': [
      {
        type: 'category',
        label: 'Speedway',
        collapsed: true,
        items: [
          'tools/speedway/install',
          'tools/speedway/cli',
          'tools/speedway/webui',
          'tools/speedway/routes',
        ],
      },
      {
        type: 'category',
        label: 'Motor SDK',
        collapsed: true,
        items: [
          'tools/motor/flutter',
          'tools/motor/go',
        ],
      }
    ],
  },
};
