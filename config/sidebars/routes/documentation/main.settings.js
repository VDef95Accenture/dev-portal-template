// @ts-check

// Section sidebars
const gettingStartedContent = require('./sections/gettingStarted.settings.js')
const productGuidesContent = require('./sections/productGuides.settings.js')

/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarConfig} */
const content = [
    {
        type: 'doc',
        label: 'Introduction',
        id: 'documentation/introduction',
    },
    {
        type: 'doc',
        label: 'Common Terms',
        id: 'documentation/Common Terms',
    },
    gettingStartedContent,
    productGuidesContent,
];

module.exports = content;