// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Radium from 'radium';
import ThemedComponent from 'theme/ThemedComponent';

type Props = {
  style: Object,
  customStyle?: Object,
  inlineStyle?: Object,
  direction: 'horizontal' | 'vertical',
  history: Object,
  children: any,
}

type State = {
  activePath: string,
}

class NavBar extends React.Component<Props, State> {

  static defaultProps = {
    direction: 'vertical',
  };

  constructor(props) {
    super(props);

    const { location: { pathname }} = props;
    this.state = {
      activePath: pathname,
    }
  }

  _onNavBarItemClick = (event, selectedPath) => {
    const { history } = this.props;

    this.setState(prev => ({
      ...prev,
      activePath: selectedPath,
    }));

    history.push(selectedPath);
  };

  render() {
    const {style, inlineStyle, direction, children} = this.props;

      const resultChildren = React.Children.map(children, (child) => {
        if (!child.type || child.type.displayName !== 'NavBarItem')
          throw new Error('Child component should be instance of <NavBarItem />');


        const hasPath = 'path' in child.props;
        const isActive = hasPath && child.props.path === this.state.activePath;

        return React.cloneElement(child, {
          isActive,
          onNavBarNotify: this._onNavBarItemClick,
        });
      });

      return (
        <div style={[style.base, style[direction], inlineStyle]}>
          {resultChildren}
        </div>
      );
    };
}

//$FlowFixMe
export default withRouter(ThemedComponent(Radium(NavBar), 'NavBarStyle'));