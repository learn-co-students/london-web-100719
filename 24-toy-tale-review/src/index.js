// DOM elements
const toyCollection = document.querySelector("#toy-collection");
const newToyButton = document.querySelector("#new-toy-btn");
const newToyFormContainer = document.querySelector(".container");
const newToyForm = document.querySelector("form");

const toggleFormDisplay = () => {
  newToyFormContainer.style.display =
    newToyFormContainer.style.display === "none" ? "block" : "none";
};

toggleFormDisplay();

newToyButton.addEventListener("click", toggleFormDisplay);

newToyForm.addEventListener("submit", event => {
  event.preventDefault();
  postToy({
    name: event.target.name.value,
    image: event.target.image.value,
    likes: 0
  }).then(newToy => renderToy(newToy));
});

// getToys().then(() => console.log("toys gort"));
getToys().then(toys => renderToys(toys));

const renderToys = toys => {
  toys.forEach(toy => renderToy(toy));
};

const renderToy = toy => {
  const toyDiv = document.createElement("div");
  toyDiv.className = "card";

  const h2 = document.createElement("h2");
  h2.innerText = toy.name;

  const img = document.createElement("img");
  img.src = toy.image;
  img.className = "toy-avatar";

  const p = document.createElement("p");
  p.innerText = `${toy.likes} likes`;

  const button = document.createElement("button");

  button.innerText = "like";

  toyDiv.append(h2, img, p, button);

  button.addEventListener("click", () => increaseLike(toy, p, button));

  toyCollection.append(toyDiv);
};

const increaseLike = (toy, toyLikesEl, button) => {
  button.disabled = true;
  toy.likes = toy.likes + 1;
  updateToy(toy).then(toy => {
    button.disabled = false;
    toyLikesEl.innerText = `${toy.likes} likes`;
  });
};
