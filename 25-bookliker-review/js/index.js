//api
const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const get = url => {
  return fetch(url).then(resp => resp.json());
};

const patch = (url, id, bookData) => {
  return fetch(url + id, {
    method: "PATCH",
    headers: apiHeaders,
    body: JSON.stringify(bookData)
  }).then(resp => resp.json());
};

const API = { get, patch };

//const

const BOOKS_URL = "http://localhost:3000/books/";
const listPanel = document.querySelector("#list");
const showPanel = document.querySelector("#show-panel");
const currentUser = { id: 1, username: "pouros" };

//functions - don't forget to call the master function

const getAllBooks = () => {
  API.get(BOOKS_URL).then(books =>
    books.forEach(book => makeBookPreview(book))
  );
};

const makeBookPreview = book => {
  const li = document.createElement("li");
  li.innerText = book.title;
  li.addEventListener("click", () => makeBookDetail(book));

  listPanel.append(li);
};

const makeBookDetail = book => {
  while (showPanel.firstChild) showPanel.removeChild(showPanel.firstChild);

  const h2 = document.createElement("h2");
  h2.innerText = book.title;

  const p = document.createElement("p");
  p.innerText = book.description;

  const img = document.createElement("img");
  img.src = book.img_url;

  const ul = document.createElement("ul");
  ul.id = "users-ul";

  book.users.forEach(bkUsr => {
    const li = document.createElement("li");
    li.innerText = bkUsr.username;
    li.id = `user-${bkUsr.id}`;
    ul.append(li);
  });

  const button = document.createElement("button");
  button.innerText = "Like Me";
  button.addEventListener("click", () => handleButtonClick(book, ul));

  showPanel.append(h2, img, p, ul, button);
};

const handleButtonClick = (book, ul) => {
  if (!hasUserReadThisBook(book)) {
    book.users.push(currentUser);
    API.patch(BOOKS_URL, book.id, book).then(makeLi(ul));
  } else {
    book.users = book.users.filter(bookUser => bookUser.id !== currentUser.id);
    API.patch(BOOKS_URL, book.id, book).then(removeLi)
    
  }
};

const makeLi = (ul) => {
  const li = document.createElement("li");
  li.innerText = currentUser.username;
  li.id = `user-${currentUser.id}`;
  ul.append(li);
};

const removeLi = () => { 
  const foundLi = document.querySelector(`#user-${currentUser.id}`);
  foundLi.remove();
}

const hasUserReadThisBook = book => {
  return book.users.find(bookUser => bookUser.id === currentUser.id);
};

getAllBooks();
