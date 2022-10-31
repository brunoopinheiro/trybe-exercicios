import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addClick } from '../redux/actions';

class ButtonClicks extends React.Component {
  render() {
    const { add } = this.props;

    return (
      <div>
        <button type="button" onClick={add}>
          Clique aqui
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick()),
});

ButtonClicks.propTypes = {
  add: propTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(ButtonClicks);
