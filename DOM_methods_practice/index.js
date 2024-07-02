// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


red_p = document.createElement("p");
red_p.style.color = "red";
red_p.textContent = "Hey I'm red!";
container.appendChild(red_p);

blue_h3 = document.createElement("h3");
blue_h3.style.color = "blue";
blue_h3.textContent = "I'm a blue h3!";
container.appendChild(blue_h3);

new_div = document.createElement("div");
new_div.style.border = "1px solid black";
new_div.style.backgroundColor = "pink";
new_h1 = document.createElement("h1");
new_h1.textContent = "I'm in a div";
new_p = document.createElement("p");
new_p.textContent = "ME TOO!";
new_div.appendChild(new_h1);
new_div.appendChild(new_p);
container.appendChild(new_div);