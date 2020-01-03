const initialState = {
  counter: 10,
  key: "e"
};

const counter = (counter = initialState.counter, action) => {
  if (action.type === ACTION_TYPES.COUNT_UP) return counter + 1;
  else if (action.type === ACTION_TYPES.COUNT_DOWN) return counter - 1;
  else return counter;
};

const key = (key = initialState.key, action) => {
  if (action.type === ACTION_TYPES.KEY_DOWN) return action.payload.key;
  else return key;
};
