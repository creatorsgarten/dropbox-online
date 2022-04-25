const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#01b266',
        secondary: '#01cd76',
        'primary-dark': '#2e504c',
        'primary-light': '#abe0c2'
      },
      fontFamily: {
        sans: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
