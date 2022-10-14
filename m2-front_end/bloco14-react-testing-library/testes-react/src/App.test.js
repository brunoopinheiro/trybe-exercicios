import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tela de Insercao de Email', () => {
  test('Verifica se existe um input de email na tela', () => {
    // Acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    
    // Fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  test('Verifica se existem dois botoes na tela', () => {
    // Acessar os elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole('button');
  
    // Fazer os testes
    expect(buttons).toHaveLength(2);
  });
  
  test('Verifica se existe o botao de "Enviar"', () => {
    render(<App />);
    const button = screen.getByTestId('id-send');
  
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  });
  
  test('Verifica que, ao digitar o email e clicar em "Enviar", o email e renderizado', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    const button = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');
  
    // Interagir com os elementos (se for necessario)
    userEvent.type(inputEmail, 'teste@teste.com');
    userEvent.click(button);
  
    expect(inputEmail).toHaveValue('');
    expect(userEmail).toHaveTextContent('Valor: teste@teste.com');
  });
});

  // Acessar os elementos da tela

  // Interagir com os elementos (se for necessario)

  // Fazer os testes
