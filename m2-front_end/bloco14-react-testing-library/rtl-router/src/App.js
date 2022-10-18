import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export const About = () => <h1>Voce esta na pagina sobre</h1>;
export const Home = () => <h1>Voce esta na pagina Inicio</h1>;
export const NoMatch = () => <h1>Pagina nao encontrada</h1>;

export default function App() {
  return(
    <div>
      <Link to="/">Inicio</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}
