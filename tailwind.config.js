module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' :	'1280px',
      '2xl'	: '1536px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
