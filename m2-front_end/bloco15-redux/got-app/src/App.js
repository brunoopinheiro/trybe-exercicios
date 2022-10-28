import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import CharacterCard from './components/CharacterCard';
import { fetchCharacter } from './redux/actions/actionCreators';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      emptyQuery: true,
      charQuery: '',
    }
  }

  handleChange = ({target}) => {
    const { value } = target;
    this.setState({
      charQuery: value,
    });
  }

  submitQuery = async () => {
    const { dispatch } = this.props;
    const { charQuery } = this.state;
    await dispatch(fetchCharacter(charQuery));
    this.setState({
      emptyQuery: false,
      charQuery: '',
    });
  }

  render() {
    const { emptyQuery, charQuery } = this.state;

    return (
      <div className="App">
        <h1>
          Game of Thrones
        </h1>
        <input
          type="text"
          name="charQuery"
          value={ charQuery }
          onChange={ this.handleChange }
          placeholder="Arya Stark, Jon Snow..."
        />
        <button
          type="button"
          onClick={ this.submitQuery }
        >
          Search
        </button>
        {
          emptyQuery
          ? (<p>Search a <strong>Game of Thrones</strong> character</p>)
          : (<CharacterCard />)
        }
      </div>
    );
  }
}

export default connect()(App);
