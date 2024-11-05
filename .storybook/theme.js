import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: "IFMA Design System Storybook",
  fontBase: '"Open Sans", sans-serif',
  brandUrl: "https://rainanaraujo.github.io/IFMA-Design-System/",
  brandImage: "https://raw.githubusercontent.com/RainanAraujo/IFMA-Design-System/668b42a0c4b01ccefc1a2106e3a242c7222391c0/public/logo.svg",
  brandTarget: '_self',
  //
  colorPrimary: '#5EAF3C',
  colorSecondary: '#5EAF3C',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#828282',
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
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});