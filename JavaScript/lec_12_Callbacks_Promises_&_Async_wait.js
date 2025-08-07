//         // Asynchronis

// console.log("one");
// console.log("one");

// setTimeout(() => {
//     console.log("hello");
// }, 1000);

// console.log("three");
// console.log("four");

//         // Callback

// function sum(a, b) {
//     console.log(a + b);
// }

// function sub(a, b) {
//     console.log(a - b);
// }

// function calculator(a, b, add) {
//     add(a, b);
// }

// calculator(1, 2, sum);
// calculator(3, 2, sub);

//         // Callback Hell (Nasted Callback);

// function getData(dataId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//          console.log("Data ",dataId);
//             resolve("Success");
//         },2000);
//     });
// }

//         // Promise Chain
// console.log("Getting Data1 ....");
// getData(1)
//     .then((res) => {
//         console.log("Getting Data2 ....");
//         return getData(2);
//     })
//     .then((res) => {
//         console.log("Getting Data3 ....");
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     })


//         // Callback Hell (Nasted Callback);    

// getData(1,() => {
//     console.log("Getting Data2 ....");
//     getData(2,() => {
//         console.log("Getting Data3 ....");
//         getData(3, () =>{
//             console.log("Getting Data4 ....");
//             getData(4);
//         });
//     });
// });




//         //Promises

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I'm a promice.");
//         // resolve("Success"); 
//         reject("Network Error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise Fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("Rejected", err);
// });



// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data1");
//             resolve("Success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data2");
//             resolve("Success");
//         }, 4000);
//     });
// }

// console.log("Fatching Data1.....");
//     asyncFunc1().then((res) => {
//         console.log("Fatching Data2.....");
//             asyncFunc2().then((res) => {
//         });
//     });


//         // Async & Await
//     // Example.
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }



function getData(dataId) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
         console.log("Data ",dataId);
            resolve("Success");
        },2000);
    });
}

//Async-await

async function getAllData() {
    console.log("Getting Data1....");
    await getData(1);
    console.log("Getting Data2....");
    await getData(2);
    console.log("Getting Data3....");
    await getData(3);
    console.log("Getting Data4....");
    await getData(4);
    console.log("Getting Data5....");
    await getData(5);
}

// IIFE: Immediately Invoked Function Expression.

(async function () {
    console.log("Getting Data1....");
    await getData(1);
    console.log("Getting Data2....");
    await getData(2);
    console.log("Getting Data3....");
    await getData(3);
    console.log("Getting Data4....");
    await getData(4);
    console.log("Getting Data5....");
    await getData(5);
})();