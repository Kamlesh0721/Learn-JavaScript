// const balance = 1583.56023

// console.log(balance.toString().length) // Balance will be converted to String and then we can use length attribute of string

// let balance2 = 130230.4543
// console.log(balance.toPrecision(6))
// console.log(balance2.toPrecision(6))

// const balance3 = 100000000
// console.log(balance3);
// console.log(balance3.toLocaleString())
// console.log(balance3.toLocaleString('en-IN'))
// console.log(balance3);

// // Math Library

// console.log(Math) // Object
// console.log(Math.abs(-5))
// console.log(Math.round(5.4))
// console.log(Math.round(5.6))

// console.log(Math.floor(5.9))
// console.log(Math.ceil(5.1))

// console.log(Math.max(4,1,2,6));
// console.log(Math.min(5,4,2,5,2));


// Random
console.log(Math.random()); // generate random number between 0 and 1
console.log(Math.random() * 10 + 1) // 0.01 is randomly generated it will give 0 as output so to avoid that we add 1 

console.log(Math.floor((Math.random() * 10) + 1))

let max = 100
let min = 10
console.log(Math.floor(Math.random() * (max - min) + 1) + min)