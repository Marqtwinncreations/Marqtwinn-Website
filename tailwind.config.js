/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': "url('../public/Assets/homePageBg.svg')",
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        xss: '0.55rem',
      },
      colors: {
        'theme-black': '#212129',
        'theme-white-1': '#FAFAFA',
        'theme-orange': '#FF7337',
        'theme-blue':'#7E98FD'
      },

      borderRadius: {
        '5xl': '25px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        fadeInRight: {
          '0%': {
            opacity: 0.9,
            transform: 'translateX(100vw)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(-50%)' },

        },

        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out 700ms',
        fadeInRight: 'fadeInRight cubic-bezier(0, 0.55, 0.45, 1) 400ms',
        marquee: 'marquee 5s linear ',
        marquee2: 'marquee2 5s linear '
      },
    },
  },
  plugins: [],
}