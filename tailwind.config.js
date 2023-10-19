/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xl: { max: "1360px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
		},
		extend: {
			fontFamily: {
				sans: [
					"SF Pro",
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					'"Helvetica Neue"',
					"Arial",
					'"Noto Sans"',
					"sans-serif",
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
			colors: {
				blue: "#17D0E2",
				purple: "#6F44A8",
				black: "#232526",
				"sub-black": "#797979",
				"stroke-dark": "#868685",
				"stroke-gray": "#E2E2E2",
				gray: "#FAFAFA",
				white: "#fff",
				red: "#F96057",
				orange: "#F8A34D",
				yellow: "#F8CE52",
				green: "#5FCF65",
			},
			backgroundImage: {
				gradient:
					"linear-gradient(210deg, #00CEE3 14.36%, #289CCF 32.28%, #4774BF 49.22%, #5D58B3 64.66%, #6B46AC 78.06%, #7040AA 87.92%)",
				gradient2:
					"linear-gradient(1deg, #00CEE3 -246.03%, #289CCF -15.94%, #4774BF 8.75%, #5D58B3 60.98%, #6B46AC 112.5%, #7040AA 237.25%)",
				gradient3:
					"linear-gradient(1deg, #00CEE3 -246.03%, #289CCF -15.94%, #4774BF 8.75%, #5D58B3 60.98%, #6B46AC 112.5%, #7040AA 237.25%)",
				gradient4:
					"linear-gradient(270deg, #00CEE3 -34.51%, #289CCF -3.95%, #4774BF 24.96%, #5D58B3 51.29%, #6B46AC 74.15%, #7040AA 90.98%)",
			},
			boxShadow: {
				low: "0px 0px 40px 0px rgba(69, 71, 69, 0.20)",
				hight: "0px 20px 66px 0px rgba(34, 48, 73, 0.20)",
			},
			borderRadius: {
				"radius-full": "50%",
				"radius-sm": "10px",
				"radius-md": "16px",
				"radius-lg": "24px",
				"radius-xlg": "32px",
			},
		},
	},
	plugins: [],
};
