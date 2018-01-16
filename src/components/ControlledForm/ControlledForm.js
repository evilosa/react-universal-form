// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';
import { ThemeChannelSubscriber } from 'theme';
import getComponentStyle from 'theme/getComponentStyle';

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
        {theme => {
          const formStyle = getComponentStyle(theme, 'ControlledForm', style);
          return (
            <div
              type="ControlledForm"
              style={
                [
                  formStyle.root,
                  formStyle[direction]
                ]
              }
            >
              <h1 type="ControlledFormHeader" style={formStyle.header}>{header}</h1>
              {children}
              <div type="ControlledFormFooter" style={formStyle.footer}>{footer}</div>
            </div>
          );
          }
        }
      </ThemeChannelSubscriber>
    );
  }
}

//$FlowFixMe
export default Radium(ControlledForm);