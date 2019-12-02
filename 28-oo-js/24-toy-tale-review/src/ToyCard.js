class ToyCard {
  constructor(toy) {
    this.toy = toy;
    this.element = document.createElement("div");
    this.element.className = "card";
    this.render();
    this.element.append(this.h2, this.img, this.p, this.button);
    this.button.addEventListener("click", () => this.increaseLike());
  }

  increaseLike() {
    this.waitingForResponse = true;
    this.toy.likes = this.toy.likes + 1;
    this.render();
    updateToy(this.toy)
      .then(toy => {
        this.toy = toy;
        this.waitingForResponse = false;
        this.render();
      })
      .catch(error => {
        alert(error);
        this.waitingForResponse = false;
        this.render();
      });
  }

  render() {
    // this.element.innerHTML = "";
    this.h2 = this.h2 || document.createElement("h2");
    if (this.h2.innerText !== this.toy.name) this.h2.innerText = this.toy.name;

    this.img = this.img || document.createElement("img");
    if (this.img.src !== this.toy.image) this.img.src = this.toy.image;
    this.img.className = "toy-avatar";

    this.p = this.p || document.createElement("p");
    this.p.innerText = `${this.toy.likes} likes`;

    this.button = this.button || document.createElement("button");

    this.button.disabled = this.waitingForResponse;

    this.button.innerText = "like";

    return this.element;
  }
}
