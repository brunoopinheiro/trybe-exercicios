import React from 'react';
import { connect } from 'react-redux';

const emptyState = {
  url: '',
  name: '',
  gender: '',
  culture: '',
  born: '',
  died: '',
  titles: [],
  aliases: [],
  father: '',
  mother: '',
  spouse: '',
  allegiances: [],
};

class CharacterCard extends React.Component {
  constructor () {
    super ();

    this.state = emptyState
  };

  componentDidMount() {
    const { character } = this.props;
    this.setState({ ...character });
  }

  render() {
    const {
      name,
      gender,
      culture,
      born,
      died,
      titles,
      aliases,
      father,
      mother,
      spouse,
    } = this.state;

    return (
      <section className="character-card">
        <h2>{ name }</h2>
        <div className="character-titles">
          {
            titles.map((title, index) => (<h3 key={`t${index}`}>{ title }</h3>))
          }
        </div>
        <p>{`Culture: ${ culture }, (${ gender })`}</p>
        <p>
          {`Born ${ born }`}
          { died !== '' && <span>{ `Died ${ died }` }</span>}
        </p>
        <p>
          {
            father !== '' ? father : 'Unknow father'
          }
        </p>
        <p>
          {
            mother !== '' ? mother : 'Unknow mother'
          }
        </p>
        <p>
          {
            spouse !== '' ? spouse : `${ name } has no spouses`
          }
        </p>
        <div className="character-aliases">
          <p>Also know as:</p>
          <ul>
            {
              aliases.map((alias, index) => (<li key={`k-${index}`}>{ alias }</li>))
            }
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  character: state.selectedCharacter,
});

export default connect(mapStateToProps)(CharacterCard);