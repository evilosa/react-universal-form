// // @flow
// import * as React from 'react';
// import PropTypes from 'prop-types';
//
// type Props = {
//   model: Object,
// }
//
// class ModelProvider extends React.Component<Props> {
//   props: Props;
//
//   constructor(props) {
//     super(props);
//
//     // this.modelStore = new ModelStore(this.props.model) // it's just idea
//   }
//
//   componentWillReceiveProps(next) {
//     this.modelStore.setModel(next.model);
//   }
// }