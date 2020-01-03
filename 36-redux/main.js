const combinedReducers = Redux.combineReducers({
  counter,
  key
});
const store = Redux.createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.ReduxStore = store;

store.subscribe(() => {
  const state = store.getState();

  counterEl.innerText = state.counter;

  keyEl.innerText = state.key;
});

fetch(myAPIURL).then(data =>
  store.dispatch({ type: "SETDATA", payload: { data } })
);
