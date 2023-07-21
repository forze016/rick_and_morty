const initialState = {
  myFavorites: [],
  allCharacters: [],
};
 function reducer(state = initialState, action) {
  const { payload } = action;
   switch (action.type) {
    case 'ADD_FAV':
      return { ...state, myFavorites: payload, allCharacters: payload };

     case 'REMOVE_FAV':
      return { ...state, myFavorites: payload };
      
     case 'FILTER':
      const gender = payload;
      if (gender === 'all') {
        return {
          ...state,
          myFavorites: [...state.allCharacters],
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter(
            (character) => character.gender === gender
          ),
        };
      }
     case 'ORDER':
      const order = payload;
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