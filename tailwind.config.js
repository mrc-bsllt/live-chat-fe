/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: '',
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  important:false,
  theme: {
    extend: {
      width: {
        10: '10%',
        15: '15%',
        20: '20%',
        25: '25%',
        30: '30%',
        35: '35%',
        40: '40%',
        45: '45%',
        50: '50%',
        55: '55%',
        60: '60%',
        65: '65%',
        70: '70%',
        75: '75%',
        80: '80%',
        85: '85%',
        90: '90%',
        95: '95%'
      },
    },
    screens: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1900px',
    },
    fontSize: {
      8: ['8px', '13px'],
      10: ['10px', '13px'],
      12: ['12px', '15px'],
      14: ['14px', '18px'],
      16: ['16px', '19px'],
      18: ['18px', '19px'],
      19: ['19px', '23px'],
      20: ['20px', '28px'],
      22: ['22px', '27px'],
      24: ['24px', '29px'],
      26: ['26px', '39px'],
      28: ['28px', '36px'],
      30: ['30px', '40px'],
      32: ['32px', '44px'],
      35: ['35px', '40px'],
      36: ['36px', '40px'],
      40: ['40px', '44px'],
      42: ['42px', '52px'],
      46: ['46px', '66px'],
      60: ['60px', '66px'],
      100: ['100px', '80px']
    },
    maxWidth: {
      10: '10%',
      15: '15%',
      20: '20%',
      25: '25%',
      30: '30%',
      35: '35%',
      40: '40%',
      45: '45%',
      50: '50%',
      55: '55%',
      60: '60%',
      65: '65%',
      70: '70%',
      75: '75%',
      80: '80%',
      85: '85%',
      90: '90%',
      95: '95%',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#303030',
      white: '#FFFFFF',
      grey: '#BEBEBE',
      gold: '#bca71d',
      green: '#207330',
      error: '#aa1717'
    }
  },
  variants: {
  },
  plugins: [],
  corePlugins: {
    container: false
  },
}
