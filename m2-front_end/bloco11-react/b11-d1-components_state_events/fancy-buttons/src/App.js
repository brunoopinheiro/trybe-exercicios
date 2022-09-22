import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // super() function must be declared first
    super();

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numeroDeCliques: 0,
    }
  }

  // Ao definir uma funcao da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...}, voce nao precisara fazer o bind. Entao nao precisaremos do construtor nesse caso. Veja como o exemplo acima seria feito com arrow function.
  handleClick () {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }))
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.handleClick }>{this.state.numeroDeCliques}</button>
      </div>
    );
  }
}

export default App;
