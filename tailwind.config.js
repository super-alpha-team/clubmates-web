module.exports = {
  mode: "jit",
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["vi"],
    defaultLocale: "vi",
  },
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#F4A261",
          dark: "#E76F51",
        },
        yellow: "#E9C46A",
        cyan: {
          light: "#2A9D8F",
          dark: "#264653",
        },
        success: "#367B48",
        error: "#B54248",
        warning: "#CAB23F",
        gray: {
          DEFAULT: "#B6B6B6",
          light: "#D2D2D2",
          dark: "#787878",
        },
        bgc: "#F8F9FA",
      },
      fontFamily: {
        serif: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
  future: {
    purgeLayersByDefault: true,
  },
};
