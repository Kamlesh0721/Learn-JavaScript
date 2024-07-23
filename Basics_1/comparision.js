// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // It will automatically type convert string 2 in number 
// console.log("02" > 1);      // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true - output is not predictable

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); // always false

// // ===

console.log("2" === 2);  // It will not type convert automatically