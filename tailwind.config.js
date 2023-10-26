/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./index.html', './src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				customTextPrimaryDark: '#1d1e35',
				customTextPrimaryRed: '#f47c57',
				customPrimaryViolet: '#af67e9',
				customPrimaryBlue: '#6565e7',
				customTextDarkGrayish: '#4a4b5e',
				customTextGrayish: '#787887',
				customGrayishLight: '#e7e7e9',
			},
			fontFamily: {
				kumbh: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
