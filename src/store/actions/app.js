/*
  File dedicated to the redux actions structure
*/

import api from '../../services/api';

//Function responsible for fetching movies according to pagination
export function loadMoviesUpcoming(page) {
  return dispatch => {
    return api
      .get(`/movie/upcoming${page ? `?page=${page}` : ''}`)
      .then(response => {
        const {data} = response;
        dispatch(setMovies(data));
      });
  };
}

//Function responsible for setting active movie item to redux
export function loadActiveItem(item) {
  return dispatch => {
    if (item) {
      return api.get(`/movie/${item.id}`).then(response => {
        const {data} = response;
        dispatch(setActiveItem(data));
      });
    } else {
      dispatch(setActiveItem(false));
    }
  };
}

//Function responsible for sending action to reducer if there is a movie list to be shown
export function setMovies(movies) {
  return {
    type: 'SET_MOVIES',
    movies,
  };
}

//Function responsible for sending action to reducer if there is an active movie to be shown
export function setActiveItem(activeItem) {
  return {
    type: 'SET_ACTIVE_ITEM',
    activeItem,
  };
}
