const bodyElement = document.createElement('body');
document.documentElement.appendChild(bodyElement);
const divElement = document.createElement('div');
bodyElement.appendChild(divElement);
divElement.id = "myDiv";
const pElement = document.createElement('p');
divElement.appendChild(pElement);
pElement.textContent = "First paragraph";
