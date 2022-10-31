import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class NumberClicks extends React.Component {
  render() {
    const { counter } = this.props;
    return <div>{ counter }</div>;
  }
}

const mapStateToProps = (state) => ({
  counter: state.clickReducer.counter,
});

NumberClicks.propTypes = {
  counter: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(NumberClicks);