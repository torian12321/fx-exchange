import border from './borders';

export const theme = {
  colors: {
    primary: '#0074ea',
    secondary: '#eb008d',
    bg: '#f5f5f5',
    bgLight: '#eeeeee',
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
  breakpoints: {
    xs: '767px',
    sm: '768px',
    md: '992px',
    lg: '1100px',
  },
  border,
};