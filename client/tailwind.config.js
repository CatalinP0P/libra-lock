/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                darkMode: '#00111c',
                'darkMode-800': '#021a29',
                primary: '#001F32',
                secondary: '#0083FF',
            },
        },
    },
    plugins: [],
};
