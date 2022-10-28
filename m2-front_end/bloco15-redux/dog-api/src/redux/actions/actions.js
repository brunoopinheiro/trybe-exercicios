export const GET_IMAGE = 'GET_IMAGE';
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

function getImage(json) {
  return {
    type: GET_IMAGE,
    payload: json.message,
  };
}

function requestDog() {
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((json) => dispatch(getImage(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}
