// const std = {
//     fullName: "Mudasir Iqbal",
//     marks: 95,
//     printMarks: function() {
//         console.log("marks = ",this.marks);
//     }
// };

// const Gulalai = {
//     FullNmae: "Gulalai"
// }

// Gulalai.__proto__=std;

//CLASSES.

// class ToyotaCar{
//     constructor(brand, mileage) {
//         console.log("Creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner= new ToyotaCar("fortuner", 10);  //constructor
// console.log(fortuner);
// let lexus= new ToyotaCar("lexus", 12);
// console.log(lexus);
// // lexus.setBrand("lexus");

class Person{
    constructor() {
        this.spacies = "Homo sapiens";
    }
    eat() {
        console.log("Eat the meal");
    }
}

class Engineer extends Person {
    constructor(branch) {
        super();
        this.brach = branch
    }
    work() {
        super.eat();
        console.log("Work to build something new.");
    }
}

let engObj = new Engineer("Electrical Engineer");