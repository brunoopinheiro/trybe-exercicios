import React from 'react';
import './Form.css';
import EstadoFavorito from './EstadoFavorito';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    // usar 'event.target.name' como key do state
    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <div>
        <h1>Estados e React: Ferramenta Incrivel ou Reagindo a Regionalismos?</h1>
        <form className="form">
          <EstadoFavorito value={ this.state.estadoFavorito } callback={ this.handleChange } />

          <label>
            Email
            <input type="email" name="email" value={ this.state.email } onChange={ this.handleChange } />
          </label>

          <label>
            Nome
            <input type="text" name="nome" value={ this.state.name } onChange={ this.handleChange }/>
          </label>

          <label>
            Idade
            <input type="number" name="idade" value={ this.state.idade } onChange={ this.handleChange }/>
          </label>

          <label>
            Vai comparecer a conferencia?
            <input type="checkbox" name="vaiComparecer" value={ this.state.vaiComparecer } onChange={ this.handleChange }/>
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita" value={ this.state.palavraChaveFavorita } onChange={ this.handleChange }>
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>
        </form>
    </div>
    );
  }
}

export default Form;