// @flow

export const actionPaneStyle = {
  base: {
    display: 'flex',
    flex: 1,
    border: '1px solid grey'
  },

  horizontal: {
    flexDirection: 'row',
    maxHeight: '30px',
    left: {
      justifyContent: 'flex-start',
    },

    center: {
      justifyContent: 'center',
    },

    right: {
      justifyContent: 'flex-end',
    }
  },

  vertical: {
    flexDirection: 'column',
    maxWidth: '200px',
    left: {
      alignItems: 'flex-start',
    },

    center: {
      alignItems: 'center',
    },

    right: {
      alignItems: 'flex-end',
    }
  },
};

export default actionPaneStyle;