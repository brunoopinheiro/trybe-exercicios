import { legacy_createStore as createStore } from "./node_modules/redux";
import { composeWithDevTools } from "./node_modules/@redux-devtools/extension";

const INITIAL_STATE = { count: 33 };

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return { count: state.count + 1 };
  }
  return state;
};

const store = createStore(reducer, composeWithDevTools());

const action = { type: 'INCREMENT_COUNTER' };

const incrementButton = document.querySelector('button');
incrementButton.addEventListener('click', () => {
  store.dispatch(action);
});

store.subscribe(() => {
  const globalState = store.getState();

  const { count } = globalState;

  const counterElement = document.querySelector('h2');
  counterElement.innerHTML = count;
  
  console.log('O estado foi alterado');
});
