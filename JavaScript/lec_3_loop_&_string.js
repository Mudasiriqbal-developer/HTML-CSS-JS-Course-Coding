//     //for loop
// for (let i = 1; i <= 500; i++) {
//     console.log("Apna college");
// }

//     //calculate sum of 1 to 5
//     let sum = 0;
//     let n = 100;
// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("sum = ",sum);

//     //while loop
// let i = 1;
// while(i<=5) {
//     console.log(i);
//     i++
// }

//     //do-while loop

// let i = 20;
// do  {
//     console.log("i = ",i);
//     i++
// } while (i <= 20);

//     //for-of loop ( use for string & array not for object)
// let str = "Apna_College";
// let size = 0;
// for (let i of str) {
//     console.log("val = ",i);
//     size++
// }
// console.log("string size = " , size);

//     //for-in loop (use for obj)

// let std = {
//     name: "Mudasir Iqbal",
//     age:22,
//     cgpa:3.25,
//     isPass:true,
// };

// for (let key in std) {
//     console.log("key = ",key,"value = ",std[key]);
// }

//         // Practice Questions
//         //Q1

// for (let num = 0; num <=100; num+2) {
//     console.log("num = " ,num);
//     if (num % 2 === 0) {
//         console.log("num = ",num);
//     }
// }

//         //Q1 (Game)

// let gameNum = 25;
// let userNum = prompt("Guess the game num : ");
// while ( userNum != gameNum) {
//   let userNum =  prompt("You entered wrong num,Guess again : ");
// }

// console.log("Congratualation, You entered the right No");


//         //String

// let str = "Apna Colleg";
// let str2 = 'Apna College';
// console.log(str[10]);

//     //Tamplate Literals

// let obj = {
//     item: "pen",
//     price: 100,
// };

// console.log("the cost of ",obj.item,"is",obj.price,"rupees");
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// let specialString = `This is a Tamplate Literals \n ${1 + 2 + 3}`;
// console.log(specialString);

//         //toUpperCase

// let str = "Apna College";
// str = str.toUpperCase();
// console.log(str);

        //Prectice Questions 
        //Q1

let user = prompt("Enter Your Full Name");
let fullName = "@"+user+user.length;
console.log(fullName);

