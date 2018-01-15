// @flow
import * as React from "react";

class UpdateBlocker extends React.Component<any> {
  shouldComponentUpdate() {
    // This is how you indicate to React's reconciler that you don't
    // need to be updated. It's a great way to boost performance when
    // you're sure (based on your props and state) that your render
    // output will not change, but it makes it difficult for libraries
    // to communicate changes down the hierarchy that you don't really
    // know anything about.
    return false
  }

  render() {
    return this.props.children
  }
}

export default UpdateBlocker;