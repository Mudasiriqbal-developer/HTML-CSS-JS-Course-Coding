//         //FUNCTIONS IN JS.
//         //Block of code that perform a specific task. can be invoke (call) whenever needed

// function myFunction(msg) {
//     console.log(msg,); //parameter
//     console.log("Apna College");
// }

// myFunction("I Love JS"); //argument

//         //func = sum two nums

// function sum(x, y) {
//     //local variable of function -> block scope
//     s = x + y;
//     return s;
//     console.log(x + y);
// }
// let val = sum(23,34);
// console.log(val);


//         //Arrow Function 
//         //Easy way of writing Functios

// //sum Func
// const arrowSum = (a, b) => {
//     console.log( a + b);
// }
// arrowSum(23,34);

// //multiply Func
// const arrowMul = (a, b) => {
//      return a * b;
// }

//         //Practice Questions.
//         //Q1

// function countVawels(str) {
//     let count = 0;
//     for (const char of str) { 
//         if (char==="a"|| char==="e"|| char==="i"||char==="o"|| char==="u") {
//              count++;
//         }
//     }
//     console.log(count );
// } 


//         //same task using arrow function.

// const countVow = (str) => {
//      let count = 0;
//     for (const char of str) { 
//         if (char==="a"|| char==="e"|| char==="i"||char==="o"|| char==="u") {
//              count++;
//         }
//     }
//     return count;
// }

//         //forEach Loop In Array.

// function myFunc(abc) {
//     return abc;
// }

// let arr = ["pesh","lahor","karachi"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })

//         //Q2

// let arr = [2,4,6,8,10];
// arr.forEach((arr) => {
//     console.log(arr * arr);
// })



//         //Some More Array Method.
//         //1.Map.

// let nums = [23,34,45];

// newArray =  nums.map((val) => {
//     return val * 2;
//     console.log(val);
// })
// console.log(newArray);

//         //Filter Array

// let arr = [22,34,46,56,67,86];
// let newArr = arr.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(newArr);

//         //Reduce Array

// const arr = [1,2,3,4,5,6];
// const outPut = arr.reduce((prev,curr) => {
//     // return prev + curr;
//     return prev > curr ? prev : curr;
// })
// console.log(outPut);

        //Q3

// const marks = [90,94,93,89,78,91,99,67];
// const outPut = marks.filter((val) => {
//     return val > 90;
// })
// console.log(outPut);

        //Q4

let n = prompt("Enter a No : ");

let arr = [];
for(let i=1; i<=n; i++) {
    arr[i-1] = i;
}
console.log(arr);

//         //Add No

// let sum = arr.reduce((prev,curr) => {
//     return prev + curr;
// })
// console.log(sum);

        //Multily No

let sum = arr.reduce((prev,curr) => {
    return prev * curr;
})
console.log(sum);