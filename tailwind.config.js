/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFF',
                secondary: '#FF9500',
                tertiary: '#000',
                background: '#091018',
                'background-light': '#081621',
            },
            fontFamily: {
                kavoon: ["Kavoon", ...fontFamily.sans],
            },
            fontSize: {
                '2xs': '10px',
                'normal': '16px',
            },
            screens: {
                'xs': '480px',
            }
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
}

