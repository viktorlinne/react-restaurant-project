/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brightColor: "#F4511F",
                backgroundColor: "#b7bca9",
                lightText: "#959595",
                nav: "#D29A89",
                background: "#F3E5D3",
                foreground: "#E8CCB9",
                button: "#BD6A51",
            }
        },
    },
    plugins: [],
}

