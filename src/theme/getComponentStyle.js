// @flow

export const getComponentStyle = (theme: Object, componentName: string, style: Object): Object => {
  return {...style, [componentName]: theme[componentName]};
};

export default getComponentStyle;
