// @ts-check

/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarItemConfig} */
const content = {
    type: 'category',
    label: 'Product Guides',
    link: {
        type: 'doc',
        id: 'documentation/product-guides/overview',
    },
    items: [
        {
            type: 'category',
            label: "Catalog API'S External DEP",
            link: {
                type: 'doc',
                id: 'documentation/product-guides/api/catalog-api-external-dep/overview',
            },
            items: [
                {
                    type: 'doc',
                    label: 'DEP API - Work Order',
                    id: 'documentation/product-guides/api/catalog-api-external-dep/DEP API - Work Order',
                },
                {
                    type: 'doc',
                    label: 'DEP API - SRT',
                    id: 'documentation/product-guides/api/catalog-api-external-dep/DEP API - SRT',
                },
                {
                    type: 'doc',
                    label: 'DEP API - Faults',
                    id: 'documentation/product-guides/api/catalog-api-external-dep/DEP API - Faults',
                },
                {
                    type: 'doc',
                    label: 'DEP API - eWarranty',
                    id: 'documentation/product-guides/api/catalog-api-external-dep/DEP API - eWarranty',
                },
                {
                    type: 'doc',
                    label: 'DEP External API - General Telemetry',
                    id: 'documentation/product-guides/api/catalog-api-external-dep/DEP External API - General Telemetry',
                },
            ]
        }
    ],
};

module.exports = content;