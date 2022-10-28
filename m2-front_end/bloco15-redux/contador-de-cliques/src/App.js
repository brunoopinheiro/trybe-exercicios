import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ButtonClicks from './components/ButtonClicks';
import NumberClicks from './components/NumberClicks';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          <ButtonClicks />
          <NumberClicks />
        </Provider>
      </div>
    );
  }
}

export default App;
