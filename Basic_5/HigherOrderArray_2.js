// * foreach loop (Imp)
// it takes callback function as argument - callback function do not have name
const lang = ["HTML", "CSS", "JS", "React"]
// lang.forEach(function (item) { console.log(item); })
// lang.forEach((item) => { console.log(item); })

// 3rd way of doing iteration
// const printMe = function (item) {
//     console.log(item);
// }
// lang.forEach(printMe) // pass reference - * do not call function

// all parameter of foreach loop
// lang.forEach((item, index, arrr) => { console.log(item, index, arrr); })

// objects inside array [{},{},{}]

const myCodeing = [
    {
        lang: "Java",
        type: ".java"
    },
    {
        lang: "Python",
        type: ".py"
    },
    {
        lang: "Javascript",
        type: ".js"
    }
]

// const values = myCodeing.forEach((item) => {
//     console.log(item.lang);
//     console.log(item.type);
//     // return
//     // return item
//     // return item.lang
//     // return item.type // always returning undefined
// })
// console.log(values); // undefined

// 

const myNums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// const value2 = myNums.filter((item) => item >= 50) // implicit return 
// const value2 = myNums.filter((item) => {  item >= 50 })  // return empty array []
const value2 = myNums.filter((item) => { return item >= 50 }) // explicit return 

console.log(value2);

// How to use foreach to return value or array

const value3 = []
myNums.forEach((item) => {
    if (item >= 50) {
        value3.push(item)
    }
})
console.log(value3);