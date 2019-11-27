const API_ENDPOINT = "http://localhost:3000";
const TOYS_URL = `${API_ENDPOINT}/toys`;

const getToys = function() {
  return fetch(TOYS_URL).then(response => response.json());
  //     return new Promise(function(resolve, reject) {
  //       try {
  //         resolve(JSON.parse(respose.body));
  //       } catch (e) {
  //         reject("oops something didn't work");
  //       }
  //     });
  //   });
};

const postToy = function(newToy) {
  return fetch(TOYS_URL, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...newToy, likes: 0 })
  }).then(res => res.json());
};

const patchToy = toy =>
  fetch(`${TOYS_URL}/${toy.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(toy)
  });

const arr1 = [0, 1, 2];
const arr2 = [...arr1, 3];

const obj1 = {
  name: "buzz",
  image: "buzz.png"
};
const ob2 = {
  ...obj1,
  likes: 0
};

const API = {
  getToys,
  postToy,
  patchToy
};
