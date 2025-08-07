let btn = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked ");
//     let a = 25;
//     a++;
//     console.log(a);
// };


// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You Are Under Arist.")
//     div.style.backgroundColor = "red";
// };


// Events Object.

btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
};

// Events Listneer.

btn.addEventListener("click", () => {
    console.log("Button1 was clicked");
})

btn.addEventListener("click" , () => {
    console.log("Button2 was clicked.")
})
const button3 = () => {
    console.log("Button3 was clicked");
}

btn.addEventListener("click" , () => {
    console.log("Button4 was clicked.")
})

// Remove button3.
btn.removeEventListener("click", button3);