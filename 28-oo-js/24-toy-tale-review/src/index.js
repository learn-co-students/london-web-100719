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
  const toyCard = new ToyCard(toy);

  toyCollection.append(toyCard.render());
};
