// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let p = document.querySelector("p");
// console.log(p);

// let para = p.getAttribute(".p");
// console.log( para);

// let div = document.getElementById("box");
// console.log(div)

// div.style.backgroundColor = "red";
// div.style.fontSize = "30px"

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);

let div = document.querySelector("div");
div.before(newBtn);

newBtn.style.Color = "black";
newBtn.style.backgroundColor = "pink";

let para = document.querySelector("p");
para.remove();

