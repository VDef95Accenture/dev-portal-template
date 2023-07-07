// Need this to assist tsconfig, otherwise TS checks will fail for image imports
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

// Need this due to incomplete module resolution from Docusaurus
declare module '@docusaurus/theme-common/internal';

// SCSS declaration for TS check
declare module '*.scss';