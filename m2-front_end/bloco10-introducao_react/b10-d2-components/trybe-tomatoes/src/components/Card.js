import React from 'react';
import './Card.css';
import propTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { name, genre, image, characters } = this.props;
    return (
      <div className="card">
        <h1>{ name }</h1>
        <p>{ genre }</p>
        <p>rating</p>
        <img src={ image } alt={ name } className="serie-poster" />
        <h2>Personagens</h2>
        <ul>
          {characters.map((person) => <li key={ person }>{ person }</li>)}
        </ul>
      </div>
    );
  }
}

Card.propTypes = {
  name: propTypes.string.isRequired,
  genre: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  characters: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Card;
