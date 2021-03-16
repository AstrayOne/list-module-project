export const addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie,
  };
};

export const deleteMovie = (movieId) => {
  return {
    type: 'DELETE_MOVIE',
    movieId,
  };
};


export const editMovie = (movie) => {
  return {
    type: 'EDIT_MOVIE',
    movie,
  };
};
