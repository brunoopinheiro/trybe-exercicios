import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // jest.spyOn(global, 'fetch');
  // global.fetch.mockResolvedValue({
  //   json: jest.fn().mockResolvedValue(joke),
  // });

  // // Outra forma de mock do fetch
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));

  // Terceira forma de mockar o fetch
  global.fetch = jest.fn(async () => ({
    json: async () => joke,
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
})

it('tests if the "New Joke" button works as intended', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Unique Joke',
    status: 200,
  };
  const joke2 = {
    id: '7h3oGtrOfxa',
    joke: 'Another thing',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch
    .mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke2),
    })
    .mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke1),
    });

  render(<App />);
  const renderedJoke = await screen.findByText(joke1.joke);
  expect(renderedJoke).toBeInTheDocument();
  expect(renderedJoke).toHaveTextContent(joke1.joke);
  expect(global.fetch).toHaveBeenCalledTimes(1);

  const newJokeButton = await screen.findByRole('button');
  expect(newJokeButton).toBeInTheDocument();
  userEvent.click(newJokeButton);
  expect(global.fetch).toHaveBeenCalledTimes(2);
  const newJoke = await screen.findByText(joke2.joke);
  expect(newJoke).toBeInTheDocument();
  expect(newJoke).toHaveTextContent(joke2.joke);
  
  // Comportamento curioso.
  expect(renderedJoke).not.toHaveTextContent(joke1.joke);
});
