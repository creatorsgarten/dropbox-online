const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
