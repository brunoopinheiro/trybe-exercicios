import React from 'react';
import data from '../data';
import Card from './Card';

class CardList extends React.Component {
  render() {
    return (
      data.map((serie) => (<Card
        key={ serie.id }
        name={ serie.name }
        genre={ serie.genre }
        image={ serie.image }
        characters={ serie.characters }
      />))
    );
  }
}

export default CardList;
