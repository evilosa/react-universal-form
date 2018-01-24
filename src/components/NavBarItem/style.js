// @flow
export const NavBarItemColors = {
  color: '#fff',
  background: '#222222',
};

export const createNavBarItemStyle = (colors: Object = NavBarItemColors) => ({
  base: {
    color: colors.color,
    background: colors.background,
  },

  horizontal: {
    flexDirection: 'row',
  },

  vertical: {
    flexDirection: 'column',
  },
});

export const NavBarItemStyle = createNavBarItemStyle(NavBarItemColors);

export default NavBarItemStyle;
