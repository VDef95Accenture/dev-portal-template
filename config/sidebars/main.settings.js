// @ts-check

// Routes for navigation
const documentationSidebarContent = require('./routes/documentation/main.settings.js')
const troubleshootingSidebarContent = require('./routes/troubleshooting/main.settings.js')

/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarsConfig} */
const sidebars = {
  documentationSidebar: documentationSidebarContent,
  troubleshootingSidebar: troubleshootingSidebarContent,
};

module.exports = sidebars;
