import React from 'react';
import CardList from './components/CardList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CardList className="Series__container" />
      </div>
    );
  }
}

export default App;
