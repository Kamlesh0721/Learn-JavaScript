// There are 2 ways to declare object in js
// 1 - literals , 2 - constructore

// singleton * imp

// Object literals
let mySym = Symbol("key")
const user = {
    name: "Kamlesh",
    "full-name": "Kamlesh Singh",
    age: 22,
    email: "kamleshsingh0198@gmail.com",
    isLoggedIn: false,
    // mySym: "Value",// It will not use symbol "mySym" as Symbol but it will store it as a string
    [mySym]: "Value"
}  // Here "name","age" "email","isLoggedIn"(keys) is internally stored as string but you do not need to write it inside quotes

// Ways to access object


// 1-
// console.log(user.name);

// 2-
// console.log(user["name"]); // we have to pass key as string here

// Why second method is necessay ?
// console.log(user["full-name"]) // in this case we can not access full-name using dot(.)

// How to use symbol as key
// console.log(user.mySym) // It is not a correct way to access symbol it will return undefined
// console.log(user[mySym]);

// console.log(typeof (user.mySym)) // It will return string if we write mySym in key insted of[mySym]

// How to change object value
// user.email = "kamleshsingh0198@outlook.com"
// console.log(user.email)

// you can freeze if you want to stop change
// Object.freeze(user)
// user.email = "kamleshsingham2001@gmail.com" // It will not give error but it will not change anything either
// console.log(user.email);

console.log(user);

user.greeting = function () {  //(imp) this will not access name if we use arrow function
    console.log(`Hello, ${this.name}`);
}

console.log(user.greeting);
console.log(user.greeting());