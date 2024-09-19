//static list vs dynamic list

//querySelectorAll hamei static list degi
//getElementBy.. hamei static list degi
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);