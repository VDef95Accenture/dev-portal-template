import React, { useSyncExternalStore } from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export const homePageTopics = {
    GETTING_STARTED : {
        title: <Translate>Getting Started</Translate>,
        link: 'documentation/getting-started/overview',
        description: <Translate>View guides and tutorials and get started using products.</Translate>
    },
    VIEW_PRODUCTS : {
        title: <Translate>View Products</Translate>,
        link: 'documentation/product-guides/overview',
        description: <Translate>Check out information on various products supported by documentation.</Translate>
    },
    FIND_ANSWERS : {
        title: <Translate>Find Answers</Translate>,
        link: 'troubleshooting/common-questions/overview',
        description: <Translate>Troubleshoot issues and get support for problems related to product usage.</Translate>
    }
}