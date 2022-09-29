import React from "react";

class EstadoFavorito extends React.Component {
  render() {
    const { value, callback } = this.props;

    let error = undefined;
    if (value.length > 120) error = 'Texto muito grande!'
    
    return(
      <label>
      Diga qual seu Estado favorito! Do Brasil ou do React, voce quem sabe!
      <textarea
        name="estadoFavorito"
        value={ value }
        onChange={ callback }
      />
      <span>{error ? error : ''}</span>
    </label>
    );
  }
}

export default EstadoFavorito;