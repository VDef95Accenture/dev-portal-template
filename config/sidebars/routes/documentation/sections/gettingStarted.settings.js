// @ts-check

/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarItemConfig} */
const content = {
    type: 'category',
    label: 'Getting Started',
    link: {
        type: 'doc',
        id: 'documentation/getting-started/overview',
    },
    items: [
        {
            type: 'doc',
            label: 'Page one',
            id: 'documentation/getting-started/one',
        },
        {
            type: 'doc',
            label: 'Page two',
            id: 'documentation/getting-started/two',
        }
    ],
};

module.exports = content;