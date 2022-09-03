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
  // By default, Docusaurus generates a sidebar from the docs folder structure

  motorSidebar: [
    'motor-sdk/intro',
    {
      type: 'category',
      label: 'Authorization',
      collapsed: false,
      collapsible: false,
      items: ['motor-sdk/auth/register', 'motor-sdk/auth/login'],
    },
    {
      type: 'category',
      label: 'Managing Data',
      collapsed: false,
      collapsible: false,
      items: ['motor-sdk/data/schemas', 'motor-sdk/data/documents'],
    },
    {
      type: 'category',
      label: 'Utilizing Storage',
      collapsed: false,
      collapsible: false,
      items: ['motor-sdk/storage/buckets', 'motor-sdk/storage/updating-buckets',],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: ['motor-sdk/reference/java', 'motor-sdk/reference/dart', 'motor-sdk/reference/go'],
    },
  ],

  // But you can create a sidebar manually
  highwaySidebar: [
    'what-is-sonr',
    {
      type: 'category',
      label: 'Modules',
      collapsed: false,
      collapsible: false,
      items: ['highway/modules/registry', 'highway/modules/schemas', 'highway/modules/buckets', 'highway/modules/objects',],
    },
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

module.exports = sidebars;
