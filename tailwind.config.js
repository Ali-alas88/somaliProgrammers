/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fit, minmax(220px, 1fr))',
      },
      screens: {
        'sm': '480px',    // Small screens, mobile phones
        'md': '768px',    // Medium screens, tablets
        'lg': '1024px',   // Large screens, laptops/desktops
        'xl': '1280px',   // Extra large screens, large desktops
        '2xl': '1536px',  // 2 Extra large screens, larger desktops
      },
      fontFamily: {
        Capriola: ['Capriola', 'sans-serif'],
      },
      backgroundImage: {
        bgHeader: 'linear-gradient(70deg, rgba(9,132,227,0.85) 40%, rgba(0,59,177,0.98) 100%)',
        bgFooter: 'linear-gradient(70deg, #0c7cfa 40%, #0351C0 100%)',
      },
    },
  },
  plugins: [],
};
