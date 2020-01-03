const counterEl = document.getElementById("counter-value");
const keyEl = document.getElementById("key-value");
const upButton = document.querySelector("button");
const downButton = document.querySelector("#down");

upButton.addEventListener("click", () =>
  store.dispatch({ type: ACTION_TYPES.COUNT_UP })
);
downButton.addEventListener("click", () =>
  store.dispatch({ type: ACTION_TYPES.COUNT_DOWN })
);

window.addEventListener("keydown", event =>
  store.dispatch({
    type: ACTION_TYPES.KEY_DOWN,
    payload: {
      key: event.key
    }
  })
);
