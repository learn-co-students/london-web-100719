const state = {
  toys: [],
  selectedToy: null,
  showErroMessage: false
};

function doSomething(something = "ehhlo", toys, callback) {
  callback(something);
  callback(toys);
  return true;
}

function multiply(num) {
  return num * num;
}

const multiplyBy = multiplier => number => multiplier * number;

// function multiplyBy(muliplier) {
//   return function(number) {
//     return muliplier * number;
//   };
// }

const TOYS_URL = "";

const getUrl = url => () => fetch(url);
const getToys = getUrl(TOYS_URL);
// const getToys = getUrl(TOYS_URL);
// const getToys = getUrl(TOYS_URL);
// const getToys = getUrl(TOYS_URL);

// getToys()

function multiplySomething(something) {
  return doSomething(something, [], multiply);
}

function logSomething(something) {
  return doSomething(something, [], console.log);
}

const renderSomeThings = things => {
  const div = document.createElement("div");
  return {
    div,
    addEventToDiv: (type, callback) => {
      div.addEventListener(type, callback);
    }
  };
};

const toys = [{ name: "woddy" }];

const getThing = key => thing => thing[key];
const getName = getThing("name");
const getage = getThing("age");
const getWeight = getThing("age");
toys.map(getName);

toys.map(thing => getThing("hairColor")(thing));
toys.map(getThing("hairColor"));

// connect(srhoudt,sofhusg)(App)

const Rocket = {
  map: (array, callback) => {},
  filter: (array, callback) => {},
  reduce: (array, callback) => {},
  find: (array, callback) => {}
};

// sort

Rocket.map(toys, toy => toy.name);
