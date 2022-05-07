module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      text: {
        primary: '#000',
        secondary: '#6c757d',
        DEFAULT: '#000',
      },
      defaults: {
        error: '#f44336',
        success: '#4caf50',
        warning: '#ff9800',
        white: '#fff',
        DEFAULT: '#fff',
      },
      surface: {
        DEFAULT: '#fff',
        100: '#343a40',
        200: '#454d55',
      },
      purple: {
        100: '#8338ec',
        DEFAULT: '#8338ec',
      },
      orange: {
        100: '#fb8500',
        DEFAULT: '#fb8500',
      },
      green: {
        100: '#b5e48c',
        DEFAULT: '#b5e48c',
      },
    },
    fontFamily: {
      primary: '"Roboto", sans-serif',
    },
    fontWeight: {
      thin: 100,
      regular: 400,
      bold: 900,
    },
    extend: {},
  },
  plugins: [],
};
