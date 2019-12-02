// API

const API_ENDPOINT = "http://localhost:3000";
const TOYS_URL = `${API_ENDPOINT}/toys`;

const getToys = () => fetch(TOYS_URL).then(res => res.json());

const postToy = newToy =>
  fetch(TOYS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(newToy)
  }).then(res => res.json());

const updateToy = toy =>
  fetch(`${TOYS_URL}/${toy.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(toy)
  }).then(res => res.json());
