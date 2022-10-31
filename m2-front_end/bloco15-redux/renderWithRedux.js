// Funcao modelo renderWithRedux
const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(
      reducer,
      initialState,
      applyMiddleware(thunk) /* Necessario apenas para testes assincronos */
    ),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};