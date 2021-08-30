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
      // screens: {
      //   'w460': '640px',
      // },
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
          light: "#D2D2D2",
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
      fontSize: {
        h1: "48px",
        h2: "36px",
        h3: "22px",
        h4: "20px",
        h5: "18px",
      },
    },
    boxShadow: {
      button:
        "0 4px 6px 0px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      card: "0px 3px 15px 4px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/line-clamp")],
  future: {
    purgeLayersByDefault: true,
  },
};
