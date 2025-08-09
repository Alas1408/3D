
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fff5ee",
          100: "#ffe6d5",
          200: "#ffc4a1",
          300: "#ff9a64",
          400: "#ff7733",
          500: "#ff6a00",      // основной
          600: "#e65c00",
          700: "#cc5200",
          800: "#993d00",
          900: "#662900"
        },
        graphite: {
          DEFAULT: "#2e2e2e",
          dark: "#1c1c1c"
        }
      }
    }
  },
  plugins: []
}