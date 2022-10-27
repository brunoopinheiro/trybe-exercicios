import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import charactersReducer from './reducers/charactersReducer';

const store = createStore(charactersReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
