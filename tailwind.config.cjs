/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte', './src/**/*.jsx'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Ropa Sans', 'sans-serif'],
				heading: ['Rubik Mono One', 'sans-serif']
			},
			colors: {
				// Websites blacks and grays and whites
				'neutral-ultra': '#08080d',
				'neutral-dark': '#0f1018',
				'neutral-mid': '#cfcfd1',
				'neutral-light': '#fff',
				'neutral-watermark': '#27272f',

				// Themed colors
				primary: '#1e73be',
				secondary: '#1e73be',
				accent: '#01abdc',
				'primary-dark': '#313f52'
			}
		}
	},
	plugins: []
};
