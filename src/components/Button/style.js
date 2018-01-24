import Color from 'color';

export const ButtonStyle = {
  base: {
    color: '#fff',
    ':hover': {
      background: Color('#0074d9').lighten(0.2).hex(),
    },
    background: '#4dd981'
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};