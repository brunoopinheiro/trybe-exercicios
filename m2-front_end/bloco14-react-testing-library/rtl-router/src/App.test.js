import React from 'react';
import { screen, act } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import userEvent from '@testing-library/user-event';

describe('Teste da aplicacao toda', () => {
  it('should render the App component', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Voce esta na pagina Inicio',
    });
    expect(homeTitle).toBeInTheDocument();
  });
  
  it('should render the About component', () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTitle = screen.getByRole('heading',
    { name: 'Voce esta na pagina sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('should test an invalid path and NotFound render', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pagina/que-nao-existe/');
    })

    const notFoundTitle = screen.getByRole('heading', { name: /pagina nao encontrada/i });
    expect(notFoundTitle).toBeInTheDocument();
  });

  it('should render only the About component', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading',
      { name: /voce esta na pagina sobre/i });
    expect(aboutTitle).toBeInTheDocument();
  });
});
