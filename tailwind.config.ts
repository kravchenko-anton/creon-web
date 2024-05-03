import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			sm: '576px',
			md: '960px',
			lg: '1280px',
			xl: '1920px'
		},
		extend: {
			fontSize: {
				'6xl': '4.25rem', // 68px
				"3xl"	: "2.375rem", 		// 38px
				"2xl"	: "2rem",
				'xl': '1.375rem', // 22px
				'md': '1.125rem', // 18px
				'sm': '1rem' // 16px
			},
			colors: {
				purple: '#AB23FF',
				blue: '#3D8BFF',
				black: '#000000',
				white: '#FFFFFF',
				greyText: '#46505F',
				greyLine: '#13171D',
				transparent: 'transparent'
			}
		}
	},
	plugins: []
}
export default config
