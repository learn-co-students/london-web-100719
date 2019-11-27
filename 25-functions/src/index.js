const addBtn = document.querySelector("#new-toy-btn");
const toyForm = document.querySelector(".container");
const toyContainer = document.querySelector("#toy-collection");
let addToy = false;

// YOUR CODE HERE

API.getToys().then(toys => renderToys(toys));

const renderToys = function(toys) {
  console.log("rendering toys");
  toys.forEach(function(toy) {
    renderToy(toy);
  });
};

const likeToy = (toy, p) => e => {
  toy.likes++;
  p.innerText = `${toy.likes} likes`;
  API.patchToy(toy);
};

const renderToy = function(toy) {
  const div = document.createElement("div");
  div.className = "card";
  toyContainer.append(div);

  const h = document.createElement("h2");
  h.innerText = toy.name;
  const img = document.createElement("img");
  img.className = "toy-avatar";
  img.src = toy.image;
  const p = document.createElement("p");
  p.innerText = `${toy.likes} likes`;
  const button = document.createElement("button");
  button.className = "like-btn";
  button.innerText = "like";

  button.addEventListener("click", likeToy(toy, p));

  div.append(h, img, p, button);
};

const addNewToy = function(newToy) {
  API.postToy(newToy).then(toy => renderToy(toy));
};

toyForm.addEventListener("submit", function(event) {
  console.log("form submitted");
  event.preventDefault();
  addNewToy({
    name: event.target.elements.name.value,
    image: event.target.elements.image.value
  });
  event.target.reset();
});

addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyForm.style.display = "block";
  } else {
    toyForm.style.display = "none";
  }
});

// OR HERE!
