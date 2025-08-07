//     //what is DOM
//     //when a web is loaded, the browser creats a Documents Object Model (DOM) of the page.

//     // console.log -> only print
//     // console.dir -> Doc -> prop method

// // console.dir(document.head);
// // console.log(document.body);

//         //DOM Manipulation.(Selecting elements
//         //1.Selecting With Id
        
// let headind = document.getElementById("heading");
// console.log(heading);


//         //2.Selecting With class.(look like an array)

// let headings = document.getElementsByClassName("myClass");

//         //3.Selecting With Tag.

// let tags = document.getElementsByTagName("p");
// console.log(tags);

//         //4. Query Selector.

// // document.querySelector("myId / myClass / tag");
// let ele = document.querySelectorAll("p");
// console.dir(ele);

//     //     Properties of DOM
//     // 1.tagName : return tag for element nodes.


//     // 2.innerText : return the text content of the elements & all childern.

// let div= document.querySelector("div");
// console.dir(div);

//     // 3.innerHTML : Return the plain text or HTML content in the element.


//     // 4. textContent : Return textual content even for hidden element.

// console.dir(document.body.firstChild);

//         //Practice Question
//         //Q1

// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + "  From Apna College";

        //Q2

// let divs  = document.querySelectorAll(".box");

// let idx = 1;
// for (div of divs) {
// div.innerText = `new unique value ${idx}`;
// idx++;
// }
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";
// let clas = document.getElementsByName("box");
// console.log(clas);

// let heading = document.getElementById("heading");
// console.log(heading);
 
// let pharas = document.getElementsByTagName("p");
// console.log(pharas);

// console.dir(document.body.firstChild);
// console.log(document.body.firstChild);

// let div = document.querySelector("div");
// console.log(div.innerHTML = "<div> inner div </div>");

// let head = document.getElementById("heading2");
// console.log(head);
// head.innerText = head.innerText +  " Apna College";

// let divs = document.getElementById("div");
// console.log(divs);

let divs = document.querySelectorAll(".box");

let i = 0;
for(div of divs) {
        div.innerText = `New Unique Text ${i+1}  Mane Ka Na Bache Da Khude Pa fazal Sanga me Oku`;
        i++
}