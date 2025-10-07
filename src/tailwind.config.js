/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}", // for Expo/React Native
		"./src/**/*.{js,jsx,ts,tsx}", // if you have a src folder
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
