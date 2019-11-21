// DOM ELEMENTS
const personListEl = document.querySelector("ul");
const planetListEl = document.querySelector("ol");
const personForm = document.querySelector("#person-form");
const planetForm = document.querySelector("#planet-form");

const handlePersonFormSubmit = event => {
  event.preventDefault();
  const newPerson = {
    name: event.target.elements.name.value,
    birth_year: event.target.elements.birth_year.value
  };
  console.log(newPerson);
  postDataToAPI(PEOPLE_URL, newPerson).then(person =>
    renderThingIntoAList(person.name, personListEl)
  );
};

const handlePlanetFormSubmit = event => {
  event.preventDefault();
  const newPlanet = {
    name: event.target.elements.name.value,
    population: event.target.elements.population.value
  };
  console.log(newPlanet);
  postDataToAPI(PLANETS_URL, newPlanet).then(planet =>
    renderThingIntoAList(getPlanetSummary(planet), planetListEl)
  );
};

personForm.addEventListener("submit", handlePersonFormSubmit);
planetForm.addEventListener("submit", handlePlanetFormSubmit);

// URLs
const API_ENDPOINT = "http://localhost:3000";
const PEOPLE_URL = `${API_ENDPOINT}/people`;
const PLANETS_URL = `${API_ENDPOINT}/planets`;

function renderThingIntoAList(innerText, listEl, indexUrl, id) {
  var thingLi = document.createElement("li");
  thingLi.innerText = innerText;
  thingLi.addEventListener("dblclick", () => {
    deleteFromAPI(`${indexUrl}/${id}`);
    thingLi.remove();
  });
  const button = document.createElement("button");
  button.innerText = "edit";
  thingLi.append(button);
  listEl.append(thingLi);
}

function renderPerson(person) {
  return renderThingIntoAList(person.name, personListEl, PEOPLE_URL, person.id);
}
function renderPlanet(planet) {
  return renderThingIntoAList(
    getPlanetSummary(planet),
    planetListEl,
    PLANETS_URL,
    planet.id
  );
}

// function jsonify(response) {
//   return response.json();
// }

const jsonify = response => response.json();

const getThingFromAPI = thingUrl => {
  return fetch(thingUrl).then(jsonify);
};

// function getThingFromAPI(thingUrl) {
//   return fetch(thingUrl).then(jsonify);
// }

function getPeopleFromAPI() {
  return getThingFromAPI(PEOPLE_URL);
}

function getPlanetsFromAPI() {
  return getThingFromAPI(PLANETS_URL);
}

function postDataToAPI(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  }).then(jsonify);
}

function deleteFromAPI(url) {
  return fetch(url, {
    method: "DELETE"
  });
}

const renderPeopleList = function(data) {
  console.log(data);
  personListEl.innerHTML = "";
  // data.forEach(function(person) {
  //   renderPerson(person);
  // });
  // data.forEach(person => renderPerson(person));
  // data.forEach(renderPerson(person));
  data.forEach(renderPerson);
};

const getPlanetSummary = planet =>
  `${planet.name} has ${planet.population} settlers`;

const renderPlanetList = function(data) {
  console.log(data);
  planetListEl.innerHTML = "";
  data.forEach(renderPlanet);
};

getPeopleFromAPI().then(renderPeopleList);

getPlanetsFromAPI().then(renderPlanetList);
