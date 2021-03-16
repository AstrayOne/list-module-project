const initialState = {
  lastId: 0,
  movieList: [],
};

const addMovie = (state, movie) => {
  const newLastId = state.lastId + 1;
  const newMovie = {id: newLastId, ...movie};
  const newList = [...state.movieList, newMovie];

  const newState = {
    lastId: newLastId,
    movieList: newList,
  };

  return newState;
}

const deleteMovie = (state, movieId) => {
  const index = state.movieList.findIndex(({ id }) => id === movieId);

  const newlist = [
    ...state.movieList.slice(0, index),
    ...state.movieList.slice(index + 1),
  ];

  const newState = {
    ...state,
    movieList: newlist
  }

  return newState;
}

const editMovie = (state, movie) => {
  const index = state.movieList.findIndex(({ id }) => id === movie.id);

  const newlist = [
    ...state.movieList.slice(0, index),
    movie,
    ...state.movieList.slice(index + 1)
  ];
  
  const newState = {
    ...state,
    movieList: newlist
  }

  return newState;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_MOVIE':
      return addMovie(state, action.movie);

    case 'DELETE_MOVIE':
      return deleteMovie(state, action.movieId);

    case 'EDIT_MOVIE':
      return editMovie(state, action.movie);

    default:
      return state;
  }
};

export default reducer;
