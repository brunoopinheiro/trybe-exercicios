import './App.css';
import React from 'react';
import Album from './components/Album';
import UserProfile from './UserProfile';
import Table from './Table';
import Order from './components/Order';

class App extends React.Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital',
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital',
      }
    };

    const joao = {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
    };

    const amelia = {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png',
    };

    const users = [joao, amelia];

    const headphone = {
      id: 103,
      user: 'cena@gmail.com',
      product: 'Razer Headphone',
      price: {
        value: 99.99,
        currency: 'dollars'
      }
    };

    const energyDrink = {
      id: 104,
      user: 'cena@gmail.com',
      product: 'Monster 500mL',
      price: {
        value: 9.99,
        currency: 'dollars',
      }
    };

    const shoppingList = ['leite', 'arroz', 'feijao', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => (<li key={ index }>{ item }</li>));

    return (
      <div>
        <UserProfile user={ joao } />
        <Album album={ album01 } />
        <UserProfile user={ amelia } />
        <Album album={ album02 } />
        <Table users={ users } />
        <div>
          <h1> Orders recently created </h1>
          <Order order={ headphone } />
          <Order order={ energyDrink } />
        </div>
        <div>
          <h2>Lista de Compras</h2>
          <ul>
            { items }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
