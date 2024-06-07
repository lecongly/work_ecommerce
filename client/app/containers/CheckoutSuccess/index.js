/**
 *
 * AuthSuccess
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import LoadingIndicator from '../../components/Common/LoadingIndicator';

class CheckoutSuccess extends React.PureComponent {
  componentDidMount() {

  }

  render() {
    const { checkoutSuccess } = this.props;

    setTimeout(() => {
      checkoutSuccess();
    } , 1000);
    return <LoadingIndicator />;
  }
}

const mapStateToProps = state => {
  return {
  };
};
export default connect(mapStateToProps, actions)(CheckoutSuccess);