// 1 
const containerID = document.getElementById("container");

//2
const containerId = document.querySelector("container");

//3 
const listSecond = document.querySelectorAll(".second");

//4 
const ol = document.querySelector("ol");
const liThird = ol.getElementsByClassName("third");

//5 
const hello = document.createTextNode("hello");
containerID.appendChild(hello);

//6
const footer = document.querySelector(".footer");
footer.classList.toggle("hello");

//7 toggle should remove as well since hello is an element already
footer.classList.toggle("hello");

//8
const newLi = document.createElement("li");

//9 
newLi.textContent = "four";

//10
const ul = document.querySelector("ul");
ul.append(newLi);

//11
const olLi = ol.querySelectorAll("li");
for (let i of olLi) {
    i.style.backgroundColor = "green";
}

//12
footer.remove();

