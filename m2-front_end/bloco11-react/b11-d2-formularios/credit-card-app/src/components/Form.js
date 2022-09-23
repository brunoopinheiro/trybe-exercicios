import React from 'react';
import './Form.css'

class Form extends React.Component {

  render() {
    const { callback, handleSaveCard, validateForm, handleInputFocus, state: { number, name, cvc, expiry} } = this.props;

    return (
      <div className='Form'>
        <h1>
          { '<Componente Form />' }
        </h1>
        <form>
          <label htmlFor="cardNumber">
            <input
              id="cardNumber"
              name="number"
              type="tel"
              placeholder="Card Number"
              value={ number }
              onChange={ callback }
              onFocus={ handleInputFocus }
            />
          </label>

          <label htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={ name }
              onChange={ callback }
              onFocus={ handleInputFocus }
            />
          </label>

          <label htmlFor="expiry">
            <input
              id="expiry"
              name="expiry"
              type="text"
              placeholder="Valid Thru"
              value={ expiry }
              onChange={ callback }
              onFocus={ handleInputFocus }
            />
          </label>

          <label htmlFor="cvc">
            <input
              id="cvc"
              name="cvc"
              type="tel"
              placeholder="CVC"
              value={ cvc }
              onChange={ callback }
              onFocus={ handleInputFocus }
            />
          </label>
          <button type="submit" disabled={ !validateForm() } onClick={ handleSaveCard }>Cadastrar Cartao</button>
        </form>
      </div>
    );
  }
}

export default Form;