import { createStore } from "redux";
import reducers from "./reducers";

// const composeEnhancers = composeWithDevTools({
//   actionCreators,
//   trace: true,
//   traceLimit: 25
// });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.dispatch()/

export default store;
