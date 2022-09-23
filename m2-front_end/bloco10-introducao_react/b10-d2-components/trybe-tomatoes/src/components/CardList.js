import React from 'react';
import data from '../data';
import Card from './Card';

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchValue = this.handleSearchValue.bind(this);

    this.state = {
      searchValue: '',
    };
  }

  handleSearchValue(event) {
    const { searchValue } = this.state;
    this.setState(
      { searchValue: event.target.value },
      () => console.log(searchValue),
    );
  }

  render() {
    const { searchValue } = this.state;
    return (
      <>
        <section>
          <input
            type="text"
            id="search"
            name="search"
            onChange={ this.handleSearchValue }
          />
        </section>
        <div className="Series__container">
          {data
            .filter((serie) => serie.name.toLowerCase().includes(searchValue))
            .map((serie) => (<Card
              key={ serie.id }
              name={ serie.name }
              genre={ serie.genre }
              image={ serie.image }
              characters={ serie.characters }
            />))}
        </div>
      </>
    );
  }
}

export default CardList;
