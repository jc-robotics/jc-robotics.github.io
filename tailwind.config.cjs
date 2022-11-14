/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
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
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')]
};
