import React from "react";
import { connect } from "react-redux";
import { fetchDog } from "./redux/actions/actions";

class App extends React.Component{
  render() {
    const { isFetching, src, dispatch } = this.props;

    if (isFetching) return <p>Loading</p>;

    return (
      <div>
        <button
          style={{ display: 'block' }}
          onClick={ () => dispatch(fetchDog())}
          type="button"
        >
          Novo Doguinho
        </button>
        {src && <img style={{ maxWidth: '80%'}} src={ src } alt="dog" />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(App);
