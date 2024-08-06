import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans, sans-serif'],
      },
      colors: {
        newGray: {
          500: '#637381',
        },
        lightGray: {
          600: '#919EAB',
        },
        lightBlack: {
          700: '#212B36',
        },
        backgroundImage: {
          'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
          // Add more gradients if needed
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
});
