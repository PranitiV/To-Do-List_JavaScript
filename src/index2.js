document.getElementById("searchInput").onkeyup = function searchFunction(
  event
) {
  console.log("entered");
  [...document.querySelectorAll("#todo-list > li")].forEach((item) => {
    const text = item.innerText.replace(/\s+/g, "").toLowerCase();
    const parsedQuery = event.currentTarget.value
      .replace(/\s+/g, "")
      .toLowerCase();
    if (text.includes(parsedQuery) || !parsedQuery) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
};
//const searchInput = document.getElementById("searchInput");
//   const parsedQuery = event.currentTarget.value
//     .replace(/\s+/g, "")
//     .toLowerCase();
//   const ul = document.getElementById("todo-list");
//   const li = ul.getElementsByTagName("li");
//   //const text = item.innerText.replace(/\s+/g, "").toLowerCase();

//   for (var i = 0; i < li.length(); i++) {
//     if (text.includes(parsedQuery)) {
//       li[i].style.display = "";
//     }
//   }
// };
