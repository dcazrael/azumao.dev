module.exports = {
  mode: 'jit',
  purge: {
    enabled: false,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: ['dark'],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      montserrat: ['Montserrat'],
      expletus: ['Expletus Sans'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-backdrop': "url('../assets/images/bg.png')",
      }),
      zIndex: {
        '-1': '-1',
      },
      minHeight: {
        110: '30rem',
        120: '40rem',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['disabled', 'group-focus', 'group-hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
