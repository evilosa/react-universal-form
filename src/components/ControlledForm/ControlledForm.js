// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';
import ThemedComponent from 'theme';
import { ThemedComponent2 } from 'theme/ThemedComponent';
import { ThemeChannelSubscriber } from 'theme';
import getComponentStyle from 'theme/getComponentStyle';
import {themeUpdateChannelName} from 'theme/themeUpdateChannelName';

export type ControlledFormProps = {
  children?: React.Node,
  header: string,
  footer: string,
  onCreate?: Function,
  onRead?: Function,
  onUpdate?: Function,
  onDelete?: Function,
  onClose?: Function,
  direction?: 'horizontal' | 'vertical',
  style: Object,
}

class ControlledForm extends React.Component<ControlledFormProps> {
  props: ControlledFormProps;

  static defaultProps = {
    header: 'Provide form header',
    footer: 'Provide form footer',
    style: defaultStyle,
    direction: 'vertical',
  };

  render() {
    const { children, style, direction, header, footer} = this.props;

    return (
      <ThemeChannelSubscriber>
        {themeUpdateChannelName => {
          console.log('Theme subscribe update');
          return (
            <div
              type="ControlledForm"
              style={
                [
                  style.root,
                  style[direction]
                ]
              }
            >
              <h1 type="ControlledFormHeader" style={style.header}>{header}</h1>
              {children}
              <div type="ControlledFormFooter" style={style.footer}>{footer}</div>
            </div>);
          }
        }
      </ThemeChannelSubscriber>
    );
  }
}

//$FlowFixMe
export default Radium(ControlledForm);