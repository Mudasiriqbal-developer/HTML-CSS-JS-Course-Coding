// let marks = [90,89,78,67,56];
// console.log(marks);
// console.log(marks.length);

// let herose = ['mudasir', 'Gulalai', 'Maaz', 'Talha', 'Awais'];
// console.log(herose);

//         //Looping over Array

// for (let i = 0; i < herose.length; i++) {
//     console.log(herose[i]);
// } 

//         //print Array Using For Of Loop

// for (let hero of herose) {
//     console.log(hero.toUpperCase());
// }

//         //Practice Questions
//         //Q1

// let marks = [85,97,44,37,60];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// console.log(sum);
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

//         //Q2
//         //Through For Of loop

// let items = [250,645,300,900,50];

// let i = 0;
// for (let val of items ) {
//     // console.log(`value ai index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer ${items[i]}= `)
//     i++;
// }

//         //Through For Of loop.

// let items = [250,645,300,900,50];
// for (let i = 0; i < items.length; i++) {
//      let offer = items / 10;
//     items[i] -= offer;
// }

// console.log(items);

//         //Array Methods
//         //Push(): add to end.

// let foodItem = ["liche, ", "Apple" , "tomato", "potato"];
// foodItem.push("Chips","Papsi","Fruit");
// console.log(foodItem);

//         //Pop(): Delete from end & return.

// let foodItem = ["liche, ", "Apple" , "tomato", "potato","Chips","Papsi","Fruit"];
// console.log(foodItem);
// foodItem.pop();
// console.log(foodItem);

//         //tostring(): convert array to string.

// let foodItem = ["liche, ", "Apple" , "tomato", "potato"];
// console.log(foodItem);
// console.log(foodItem.toString());
// console.log(foodItem);

//         //concat(): jion multiple array & return Result

// let marvel_heroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["spuerman", "batnman"];
// let pakHeroes = ["farhan", "Ali"];

// let heroes = marvel_heroes.concat(dcHeroes, pakHeroes);
// console.log(heroes);

//         //unshift(): add to start
//         //shift(): delete from  start


//         //Slice(): return a piece of the array ( no chang in org array).

//         //Splice(): Chnage org array (add,remove,replace). 

// let arr = [1,2,3,4,5,6,7];

// arr.splice(2,2,101,102);

//     //add Elements
// arr.splice(2,0,101);

//     //Delete Element
// arr.splice(3,1);

//     //Replace Element
// arr.splice(3,1,101);


//         //Q3
    
// let com = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// console.log(com);
//         //Remove the first company from the array
// com.shift();
// console.log(com);

//         //Remove Uber & Add Ola in its plase

// com.splice(2,1,"Ola");
// console.log(com);

//         //Add Amazon at the end

// com.push("Amazon");
// console.log(com);