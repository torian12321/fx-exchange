import border from './borders';

export const theme = {
  colors: {
    primary: '#0074ea',
    secondary: '#eb008d',
    bg: '#f8f8f8',
    bgLight: '#ffffff',
    bgDark: '#dddddd',
    text: {
      light: 'white',
      dark: 'black'
    },
    states: {
      disabled: {
        bg: '#aaaaaa',
        text: 'white',
      }
    }
  },
  transitionTime: '.4s',
  breakpoints: {
    xs: '767px',
    sm: '768px',
    md: '992px',
    lg: '1100px',
  },
  border,
};