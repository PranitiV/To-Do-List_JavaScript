import "./styles.css";
//why did a separate function not work?
//
const input = document.getElementById("what-to-do");
const task = document.getElementById("todo-list");
const button = document.getElementById("enterBtn");

button.addEventListener("click", enterFunc);

function enterFunc() {
  const element = document.createElement("li");
  element.classList.add("item");
  element.innerHTML = `
      <span class="item-text">${input.value}</span>
      <div class = "buttons"> 
      <button class="item-done"> - </button>
      <button class="item-delete"> x </button> </div>
    `;
  task.appendChild(element);
  input.value = "";
}

document.addEventListener("click", deleteItem, true);

function deleteItem(event) {
  const target = event.target;
  if (target.classList.contains("item-delete")) {
    //console.log(target.parentNode.parentNode.parentNode);
    task.removeChild(target.parentNode.parentNode);
  }
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("item-done")) {
    //console.log("entered");
    target.parentNode.parentNode
      .querySelector(".item-text")
      .classList.toggle("strike");
  }
});
