import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#1a535c',          // Deep Teal
        secondary: '#4ecdc4',        // Light Teal
        success: '#ff6b6b',          // Coral Pink
        info: '#ffe66d',             // Pale Yellow
        warning: '#f07f13',          // Burnt Orange
        danger: '#d62828',           // Fire Engine Red
        light: '#f7fff7',            // Pale Mint
        dark: '#2b2d42',             // Gunmetal
        'primary-hover': '#164d53',  // Darker Deep Teal
        'secondary-hover': '#42b7b0', // Darker Light Teal
        'success-hover': '#e55a5a',   // Darker Coral Pink
        'info-hover': '#e9d159',      // Darker Pale Yellow
        'warning-hover': '#d76f10',   // Darker Burnt Orange
        'danger-hover': '#b72323',    // Darker Fire Engine Red
        'light-hover': '#e1f9e1',     // Darker Pale Mint
        'dark-hover': '#25273a',      // Darker Gunmetal
			},
		}
	},

	plugins: [],
	darkMode: 'class'
} as Config;
