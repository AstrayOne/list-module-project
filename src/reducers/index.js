const initialState = {
  lastId: 0,
  movieList: [],
};

function Movie(id, title, director, releaseYear, runningTime) {
  this.id = id;
  this.title = title;
  this.director = director;
  this.releaseYear = releaseYear;
  this.runningTime = runningTime;
};

const addItem = (state, item) => {
  const newLastId = state.lastId + 1;
  const newMovie = new Movie(newLastId, item.title, item.director, item.releaseYear, item.runningTime);
  const newList = [...state.movieList, newMovie];

  const newState = {
    lastId: newLastId,
    movieList: newList,
  };

  return newState;
}

const deleteItem = (state, itemId) => {
  const index = state.movieList.findIndex(({ id }) => id === itemId);

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

const editItem = (state, item) => {
  const index = state.movieList.findIndex(({ id }) => id === item.id);

  const newItem = new Movie(item.id, item.title, item.director, item.releaseYear, item.runningTime);
  const newlist = [
    ...state.movieList.slice(0, index),
    newItem,
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

    case 'ADD_ITEM':
      return addItem(state, action.item);

    case 'DELETE_ITEM':
      return deleteItem(state, action.itemId);

    case 'EDIT_ITEM':
      return editItem(state, action.item);

    default:
      return state;
  }
};

export default reducer;
