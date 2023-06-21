module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx,svelte}'],
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
