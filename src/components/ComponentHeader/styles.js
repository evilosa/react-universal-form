// @flow

const height = '30px';
const minHeight = '30px';
const maxHeight = '40px';

export const ComponentHeaderStyle = {
  base: {
    display: 'flex',
    flex: '1 0',
    height,
    minHeight,
    maxHeight,
  },

  top: {
    flexDirection: 'column',
  },

  bottom: {
    flexDirection: 'column-reverse',
  },

  left: {
    flexDirection: 'row',
  },

  right: {
    flexDirection: 'row-reverse',
  },

  header: {
    border: '1px solid red',
    flex: '1 0',
    maxWidth: '150px',
    height,
    minHeight,
    maxHeight,
  },

  content: {
    border: '1px solid green',
    flex: '1 0',
    height,
    minHeight,
    maxHeight,
  },
};

export default ComponentHeaderStyle;