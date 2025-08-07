                  //Single line comment.
                /* Multiple line comments.*/

                //Arithmatic operators
// let a = 5;
// let b = 2;

// console.log("a =" ,a ,"& b = ",b)
// console.log("a - b = ", a - b);
// console.log("a + b = ", a + b);  
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);

//                //Modulas % 
// console.log("a % b = ", a % b);
//                //Exponentiation ** (a**b = a Power b).
// console.log("a ** b = ", a ** b);
//                //Increment ++
// a++; //6
// console.log(a);
// b++; //3
//               //Decriment --
// a--; //4
// b--; //1

//                //Assignment Operators
//                // 1. =, 2. += (a+=1 = a=a+1), 3.-=, 4. *=, 5. %=, 6. **=
// a +=4; // 9
// console.log("a +=",a);

//                 //COMPARISON OPERATORS.
//                // equal to ==, Not equal to !=, equal to & type  ===, Not equal to & type  !==; >,>=,<,<=;
// console.log("5 == 2" , a == b);
// console.log("5 != 2" , a != b);

//            // LOGICAL OPERATORS.
//          //Logical AND &&, Logical OR ||, Logical NOT !;

// let a = 5;
// let b = 2;
// let cond1 = a > b; //true
// let cond2 = a == 5; //true
// console.log("cond1 && cond2", cond1 && cond2);
//                   //OR
// console.log("cond1 || cond2", a < b ||  a == 5);

//                  // CONDITIONAL STATEMNET
//                   //if STATMENT.
// let age = 16;
// if (age > 18) {
//     console.log("You can vote");
// }

// if (age < 18) {
//     console.log("You can not vote");
// }

// let mode = "dark"
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }
// console.log(color);

//             //if-else Statemnet

// let mode = "green"
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// else 
//     {color = "white";}
// console.log(color);

//                   //Find odd or even No.
// let num = 9;
// if (num%2 ===0) {
//     console.log(num, "is even");
// } else {console.log(num, "is odd");}

//                   //else-if Stat
// let age = 61;
// if(age < 18) {
//     console.log("Junior");
// } else if (age > 60) {
//     console.log("Senior");
// } else {console.log("Middle")};

//                   // Ternary Operators (a ? b : c)
// let age = 16 ;
// let result =  age >= 18 ? "adult" : " not adult";
// console.log(result);


//                   // Prctice Questions
//                   //Q1
// let num = prompt("Enter a number");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// } else {console.log(num, "is NOT a multiple of 5");}

                //Q2

let marks = prompt("Enter a Marks");
if (marks >= 90 && marks <= 100) {
    console.log(marks, "Grade = 'A' ");
} else if (marks >= 70 && marks <= 89) 
   { console.log(marks, "Grade = 'B' ");}
   else if (marks >= 60 && marks <= 69) 
   { console.log(marks, "Grade = 'C' ");}
   else if (marks >= 50 && marks <= 59) 
   { console.log(marks, "Grade = 'D' ");}
   else if (marks >= 0 && marks <= 59) 
   { console.log(marks, "Grade = 'F' ");}

   console.log(marks);



