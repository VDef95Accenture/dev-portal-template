// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// Themes
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// Constants
const communityDetails = require('./config/community/constants');
const resourcesDetails = require('./config/resources/constants');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // General Docusaurus properties
  title: 'Developer Docs',
  tagline: 'Discover, learn, and develop with our data-sharing programs.',
  url: 'https://gentle-sand-03e68ee0f.2.azurestaticapps.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/cnhifavicon.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    //path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English'
      },
      it: {
        label: 'Italiano',
      }
    },
  },

  // Additional plugins
  plugins: ['docusaurus-plugin-sass'],

  // Docusaurus preset settings
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime : true,
          sidebarPath: require.resolve('./config/sidebars/main.settings.js'),
          routeBasePath: '/', // setting to this value allows docs to default to root
        },
        blog: false, // setting to this removes the /blog route from navigation entirely
        theme: {
          customCss: require.resolve('./src/styles/global.scss'),
        },
      }),
    ],
  ],

  // Docusaurus theme/navigation settings
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Cnhi Logo',
          src: 'img/logos/Logo_CNH_Industrialsvg.svg',
          srcDark: 'img/logos/CNHI_BIG.D.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'documentation/introduction',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'troubleshooting/introduction',
            position: 'left',
            label: 'Troubleshooting',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: resourcesDetails.COMPANY_INFO.label,
                href: resourcesDetails.COMPANY_INFO.link,
              },
              {
                label: resourcesDetails.PRODUCTS_INFO.label,
                href: resourcesDetails.PRODUCTS_INFO.link,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: communityDetails.TWITTER_INFO.label,
                href: communityDetails.TWITTER_INFO.link,
              },
              {
                label: communityDetails.LINKEDIN_INFO.label,
                href: communityDetails.LINKEDIN_INFO.link,
              },
              {
                label: communityDetails.YOUTUBE_INFO.label,
                href: communityDetails.YOUTUBE_INFO.link,
              },
              {
                label: communityDetails.FACEBOOK_INFO.label,
                href: communityDetails.FACEBOOK_INFO.link,
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Frequently Asked Questions',
                to: '/troubleshooting/common-questions/overview',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} CNH Industrial N.V. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
