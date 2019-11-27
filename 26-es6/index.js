import * as API from "./API.js";

let toys = [];
let selecgedToy = null;

API.getThings()
  .then(data => data.json())
  .then(array => {
    // toys = newToys;
    // renderToys(toys);
    array.forEach(renderpips);
  });

const person = {
  name: "mani",
  age: 28,
  height: "medium"
};

// destructuring

// const name = person.name;
// const age = person.age;
// const height = person.height;

const { name, age, height } = person;

const doSomethingWithPerson = ({ name }) => {
  console.log("name", name);
};

const giveMeAnArray = () => {
  return ["hello", "hi", "goodbye"];
};

const useState = initialValue => {
  let currentValue = initialValue;
  return [currentValue, newValue => (currentValue = newValue)];
};

// key value assignment shortcut

const anotherPerson = {
  name,
  age,
  height,
  height: 10
};

// dynamic object keys

person.name;
person["name"];

const getAKey = key => person[key];

getAKey("name");

const dynamicKey = "age";
const value = 28;

const event = {
  target: {
    name: "password",
    value: "P@ssw0rd"
  }
};

// const userInputData = {
//   [someData.name]: someData.value
// };

let formData = {};
document.querySelectorAll("input").forEach(el => {
  el.addEventListener("input", event => {
    formData = {
      ...formData,
      [event.target.name]: event.target.value
    };
    console.log(formData);
  });
});

// ES6 Spread Operator

const aCloneOfMani = {
  ...person
};

const array = [1, 6, 34, 6];
// array.push("4534");
const newArray = [...array, "4534"];

const tuple = [5, 2];

const myfunc = (num, number) => {
  return num * number;
};

myfunc(...tuple);

// arrow functions

const myconcisefunc = (num, number) => num * number;

// class instance properties and class syntax in general

class Person {
  constructor({ name, age, height }) {
    console.log("Person constructor");
    this.name = name;
    this.age = age;
    this.height = height;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  increaseAge = () => {
    console.log(this);
    this.setAge(this.age + 1);
  };

  setName = newName => {
    console.log(this);
    this.name = newName;
  };
}

const p = new Person(person);

// document
//   .querySelector("button")
//   .addEventListener("click", () => p.setName("sam"));

document.querySelector("button").addEventListener("click", p.increaseAge);

// import / export modules

// async await

API.getThings()
  .then(things => {
    console.log(things);
  })
  .then(things => {
    console.log(things);
  })
  .then(things => {
    console.log(things);
  })
  .then(things => {
    console.log(things);
  })
  .then(things => {
    console.log(things);
  })
  .catch(e => console.error(e));

const main = async () => {
  try {
    const things = await API.getThings();
    // const things = await API.getThings();
    // const things = await API.getThings();
    // const things = await API.getThings();
    // const things = await API.getThings();
    // const things = await API.getThings();
    console.log(things);
  } catch (e) {
    console.error(e);
  }
};
main();

// babel
