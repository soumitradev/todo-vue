module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '3': '25%',
      'full': '100%',
    },
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
