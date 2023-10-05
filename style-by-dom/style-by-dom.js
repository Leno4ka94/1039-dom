const title = document.querySelector("h1");
const nodeList = document.querySelectorAll("p");
const visible = document.querySelector("span");
const string = document.querySelector("#myList");

title.style.backgroundColor = "lightgreen";
nodeList[0].style.fontWeight = "bold";
nodeList[1].style.fontWeight = "300";
nodeList[1].style.color = "red";
nodeList[2].style.textDecoration = "underline";
nodeList[3].style.fontStyle = "italic";

visible.style.visibility = "hidden";
string.style.display = "flex";
string.style.listStyle = "none";
