let num1 = 123
let num2 = 123
console.log(num1 === num2)

let str1 = "123"
let str2 = "123"
console.log(str1 === str2)

let num3 = Symbol('123')
let num4 = Symbol('123')
console.log(num3 === num4)  // every symbol is different even if their value is different

const numBig = 100000000000n
console.log(numBig)

// reference (Non-Premitive data type)
// Array , Object , Functions

const heroes = ["Shaktiman", "nagraj", "Doga"]
console.log(heroes)

const myObj = {
    name: "kamlesh",
    age: 23
}

const myFunction = function () {
    console.log("Hello World")
}

// typeof 
console.log(typeof (numBig))
console.log(typeof (heroes)) // It is also object
console.log(typeof (myObj)) // It shows function but it is known as object function
console.log(typeof (myFunction))