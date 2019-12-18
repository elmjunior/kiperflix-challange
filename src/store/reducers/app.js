/*
  File dedicated to the seting up reducers structure
*/

let defaultState = {
  movies: [],
  activeItem: {},
};

const appReducer = (state = {...state, ...defaultState}, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: [...state.movies, ...action.movies.results],
      };
    case 'SET_ACTIVE_ITEM':
      return {
        ...state,
        activeItem: action.activeItem,
      };

    default:
      return state;
  }
};

export default appReducer;
