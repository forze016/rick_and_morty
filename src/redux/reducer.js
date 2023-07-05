const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAV':
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case 'REMOVE_FAV':
      const id = parseInt(action.payload);
      return {
        ...state,
        myFavorites: state.myFavorites.filter((character) => character.id !== id),
        allCharacters: state.allCharacters.filter((character) => character.id !== id),
      };
    case 'FILTER':
      const gender = action.payload;
      if (gender === 'all') {
        return {
          ...state,
          myFavorites: [...state.allCharacters],
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter((character) => character.gender === gender),
        };
      }
    case 'ORDER':
      const order = action.payload;
      let sortedCharacters = [...state.myFavorites];
      if (order === 'A') {
        sortedCharacters.sort((a, b) => a.id - b.id);
      } else if (order === 'D') {
        sortedCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: sortedCharacters,
      };
    default:
      return state;
  }
}

export default reducer;
