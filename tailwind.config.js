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
          footer: "#FBB667",
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
          dark: "#787878",
        },
        secondary: "#F3CD03",
        bgc: "#F8F9FA",
      },
      fontFamily: {
        serif: ["Nunito", "sans-serif"],
      },
      borderRadius: {
        footer: "48% 49% 0% 0% / 12% 16% 0% 0% ",
      },
    },
    boxShadow: {
      button:
        "0 4px 6px 0px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      card: "0px 3px 15px 4px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
  future: {
    purgeLayersByDefault: true,
  },
};
