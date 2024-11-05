
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      large: '1.125rem',    // 18px
      medium: '1rem',       // 16px
      small: '0.875rem',    // 14px
      xSmall: '0.75rem',    // 12px
      dLarge: '6rem',       // 96px
      dMedium: '3.25rem',   // 52px
      dSmall: '2.75rem',    // 44px
      dXSmall: '2.25rem',   // 36px
      h1: '2.5rem',         // 40px
      h2: '2.25rem',        // 36px
      h3: '2rem',           // 32px
      h4: '1.75rem',        // 28px
      h5: '1.5rem',         // 24px
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      gray: {
        900: "#303030",
        800: "#454545",
        700: "#585858",
        600: "#6E6E6E",
        500: "#828282",
        400: "#AAAAAA",
        300: "#BFBFBF",
        200: "#DEDEDE",
        100: "#E8E8E8",
        50: "#F2F2F2",
      },

      green: {
        900: "#002E08",
        800: "#0F511D",
        700: "#327025",
        600: "#3E8320",
        500: "#5EAF3C",
        400: "#7FBF65",
        300: "#98D57F",
        200: "#BBDFAC",
        100: "#D6F1CA",
        50: "#EAFCE2",
      },
      red: {
        900: "#4E0101",
        800: "#8B0202",
        700: "#BA1122",
        600: "#CD191E",
        500: "#D63336",
        400: "#D34C51",
        300: "#DE797C",
        200: "#EB8F93",
        100: "#FAC8CD",
        50: "#FFE5E6",
      },
      blue: {
        900: "#110658",
        800: "#2D2D87",
        700: "#3036A1",
        600: "#383EB5",
        500: "#3E4DB8",
        400: "#5759A7",
        300: "#8182BD",
        200: "#ACADD3",
        100: "#D2D1F0",
        50: "#E5E6FF",
      },
      yellow: {
        900: "#181508",
        800: "#61531F",
        700: "#AA9136",
        600: "#C2A63E",
        500: "#E5C348",
        400: "#F3CF4D",
        300: "#F5D971",
        200: "#F8E294",
        100: "#FBF1CA",
        50: "#FEFAED",
      },
    },

  },
  plugins: [

  ]
};

