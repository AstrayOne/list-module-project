import { createStore } from 'redux';
import reducer from 'reducers';

let localState = JSON.parse(localStorage.getItem('state'));

if(localState == null) localState = {lastId: 0, movieList: []};

const store = createStore(reducer, localState, window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  const state = JSON.stringify(store.getState());
  localStorage.setItem('state', state);
});

export default store;