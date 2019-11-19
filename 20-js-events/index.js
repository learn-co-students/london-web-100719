const EVENTS_IM_USING = {
  CLICK: "click",
  SCROLL: "scroll"
};

const buttonToBeClicked = document.getElementById("button-to-be-clicked");
const buttonContainer = document.getElementById("button-container");
// buttonContainer.addEventListener("click", function(event) {
//   if (event.target.tagName === "BUTTON") {
//     console.log("a button has been clicked", event.target);
//   }
// });

function handleClick() {
  console.log("clicked");
}
function handleDoubleClick() {
  console.log("double clicked");
}

document.addEventListener("click", function(e) {
  console.log(e);
  if (e.target === buttonToBeClicked) {
    //   do a thing
  } else if (e.target === buttonContainer) {
    //   do another thing
  }
});

document.querySelectorAll(".clickable").forEach(function(el) {
  el.addEventListener("click", handleClickableThing);
});

// buttonToBeClicked.addEventListener("click", handleClick);
buttonToBeClicked.addEventListener("dblclick", handleDoubleClick);

document.addEventListener("scroll", function() {
  console.log(window.scrollY);
  if (window.scrollY > 300) {
    // window.scrollTo(0, 0);
    // showNavBar()
  }
});

document.addEventListener("submit", function(e) {
  console.log("submit fro mdoc");
});
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log("submit my form");
});
