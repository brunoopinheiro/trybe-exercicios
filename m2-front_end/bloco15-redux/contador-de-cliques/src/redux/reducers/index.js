import { ADD_CLICK } from "../actions";

const initialState = {
  counter: 0,
};

function clickReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CLICK:
      return { counter: state.counter + 1 };

    default:
      return state;
  }
}

export default clickReducer;
