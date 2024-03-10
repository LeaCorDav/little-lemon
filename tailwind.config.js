/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'mainColor': '#495E57',
          'accentColor': '#F4CE14',
          'secLightColor': '#FBDABB',
          'secDarkColor': '#EE9972',
          'darkColor': '#333333',
          'lightColor': '#EDEFEE',
        },
        fontSize: {
          '40': '2.5rem',
          '64': '4rem',
        },
      },
    },
    plugins: [],
  }