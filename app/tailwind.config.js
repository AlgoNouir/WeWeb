/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            white: "#FFF",
        },
        extend: {
            gridTemplateAreas: {
                layout: ["anm game  game", "anm game2 game3", "prg prg prg"],
            },
            gridTemplateColumns: {
                layout: "24rem 1fr 2rem",
            },
            gridTemplateRows: {
                layout: "6rem 3rem 1fr auto",
            },
        },
    },
    plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
