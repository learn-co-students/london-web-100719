// var num = 3;

// function add(number) {
//   return number + number;
// }

// add(num);
// add(3);

// function callAFunction(callback) {
//   return callback();
// }

// callAFunction(add);

// function getData(url, callback) {
//   return fetch(url).then(callback);
// }

// getData("google.com", function(res) {
//   return res.json();
// });

var personListEl = document.querySelector("ul");
var personListEl = document.querySelector("ul");
var personListEl = document.querySelector("ul");

function renderPersonIntoPersonList(person) {
  var personLi = document.createElement("li");
  personLi.innerText = person.name;
  personListEl.append(personLi);
}

fetch("https://swapi.co/api/people/")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    personListEl.innerHTML = "";
    data.results.forEach(function(person) {
      renderPersonIntoPersonList(person);
    });
  });

// var something = await fetch(url);

// fetch("https://swapi.co/api/people/").then(response => response.json());

function jsonify(response) {
  return response.json();
}

const arrowJsonify = response => response.json();

function sayDone() {
  console.log("done");
}

// fetch("https://swapi.co/api/people/").then(jsonify);
// fetch("https://swapi.co/api/people/")
//   .then(arrowJsonify)
//   .then(sayDone);

// JSON.parse("{}")
