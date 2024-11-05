import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: "IFMA Design System Storybook",
  fontBase: '"Open Sans", sans-serif',
  brandUrl: "https://rainanaraujo.github.io/IFMA-Design-System/",
  brandImage: "https://rainanaraujo.github.io/IFMA-Design-System/logo.svg",
  brandTarget: '_self',
  //
  colorPrimary: '#5EAF3C',
  colorSecondary: '#5EAF3C',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#DEDEDE',
  appBorderRadius: 4,

  // Text colors
  textColor: '#303030',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#DEDEDE',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});