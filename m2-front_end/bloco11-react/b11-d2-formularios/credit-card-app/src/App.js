import React from 'react';
import './App.css';
import Form from './components/Form';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      cvc: '',
      number: '',
      expiry: '',
      focused: '',
      savedCards: [],
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleInputFocus = (event) => {
    this.setState({ focused: event.target.name });
  }

  // Funcao importante de validacao
  validateForm = () => {
    const cvcSize = this.state.cvc.length === 3;

    // regra de negocio, ao menos 2 nomes.
    // usando regEx
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const nameValid = nameRegex.test(this.state.name);

    return cvcSize && nameValid;
  }

  // Funcao importante - salvar state para cadastro
  handleSaveCard = (event) => {
    event.preventDefault();
    const { cvc, expiry, name, number } = this.state;
    const newCard = { cvc, expiry, name, number };
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
    }));
  }

  render() {
    const { cvc, expiry, focused, name, number } = this.state;
    return (
      <>
      <div className="json">
        <pre>{ JSON.stringify(this.state, null, 2) }</pre>
      </div>
      <Cards
        cvc ={ cvc }
        expiry={ expiry }
        focused={ focused }
        name={ name }
        number={ number }
      />
      <Form 
        state={ this.state }
        callback={ this.handleInputChange }
        handleInputFocus={ this.handleInputFocus }
        validateForm={ this.validateForm }
        handleSaveCard={ this.handleSaveCard }
      />
      </>
    );
  }
}

export default App;

// https://socket.dev/npm/package/react-credit-cards-2
