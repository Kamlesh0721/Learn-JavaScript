let myDate = new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())

console.log(typeof (myDate))

// Create specific date
//let newDate = new Date(2024, 0, 1) // Month starts from 0 - 0 represent january
//let newDate = new Date(2024, 0, 1, 5, 5)
// let newDate = new Date("2024-01-1")  // Here 1 reperesent janauary
let newDate = new Date("01-01-2024")
console.log(newDate.toString())

// Time stamp
let timeStamp = Date.now() // It returns time in milli seconds
console.log(timeStamp)
console.log(myDate.getTime());

// To convert mili seconds in second
console.log(Math.floor(timeStamp / 1000)) // Math.floor is used to avoid decimal value