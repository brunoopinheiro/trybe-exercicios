import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

class App extends React.Component {
  render() {
    const { countState, dispatch, clicksCount } = this.props;

    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button
          onClick={() => dispatch(actionCreator())}
        >
          Incrementa 1
        </button>
        <button
          onClick={() => dispatch(actionCreator(5))}
        >
          Incrementa 5
        </button>
        <h3>Numero de clicks: { clicksCount }</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksCount: state.counterReducer.clicks,
});

export default connect(mapStateToProps)(App);
