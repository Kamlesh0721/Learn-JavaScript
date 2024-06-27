const arr1 = [1, 2, 3, 4, 5]
const arr2 = ["Batman", "Darevil"]
const arr3 = [10, 20, "Thirty", 40, "Fifty"]
const arr4 = new Array(10, 20, 30)
// console.log(arr1)
// console.log(arr1[1])
// console.log(arr4)

// Array Methods
// arr1.push(6)
// arr1.push(7)
// console.log(arr1)

// arr1.pop()
// console.log(arr1)

// arr1.unshift(0)
// console.log(arr1)

// arr1.shift()
// console.log(arr1)

// Questionnaire Array methods :
// console.log(arr1.includes(4));
// console.log(arr1.indexOf(3));

// join (imp)
// const newArr = arr1.join()

// console.log(arr1);

// console.log(newArr); // it will return a comma seprated String

// const newArr1 = arr1.join("*")

// console.log(arr1);

// console.log(newArr1); // it will return a * seprated String

// Slice vs Splice (very Imp)

console.log(arr3)

arrA = arr3.slice(1, 3) // exclude 3 and also does not modify origional array
console.log(arrA);
console.log(arr3)

arrB = arr3.splice(1, 3) // (IMP) Include 3 and also change origional array
console.log(arrB);
console.log(arr3);