import React from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  handleInput = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  changeSaveEmail = () => {
    const { email } = this.state;
    this.setState({ saveEmail: email, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;

    return(
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            name="email"
            onChange={ this.handleInput }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ this.changeSaveEmail }
        />
        <input
          id="btn-id"
          type="button"
          value="Voltar"
        />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;
