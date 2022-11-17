export const GET_CHARACTER = 'GET_CHARACTER';
export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';

function getCharacter(json) {
  return {
    type: GET_CHARACTER,
    payload: json[0],
  }
}

function requestCharacter() {
  return { type: REQUEST_CHARACTER };
}

export function fetchCharacter(charName) {
  return async (dispatch) => {
    console.log(typeof dispatch);
    dispatch(requestCharacter());
    const URL = `https://anapioficeandfire.com/api/characters?name=${charName}`;
    const result = await fetch(URL);
    const character = await result.json();
    return dispatch(getCharacter(character));
  }
}
