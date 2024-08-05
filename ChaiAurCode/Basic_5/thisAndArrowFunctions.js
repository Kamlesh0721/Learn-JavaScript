// const user = {
//     userName: "Kamlesh",
//     id: 101,
//     greetings: function () {
//         // console.log(`Welcome ${userName}`);// give error - userName not defined
//         console.log(`Welcome ${this.userName}`);
//         console.log(this);  // return current context i.e. function: greeting
//     }
// }

// user.greetings()
// user.userName = "Kamlesh Singh"
// user.greetings()
// console.log(user.greetings);


// console.log(this); // here it will return "{}" empty object - global context 
// but if we run it in browser it will return window object - global current context for browser

// this - this refers to object that is currently calling the function
//why  this keyword is not in Function(*veryImp - reason)
// function fun1() {
//     let userName = "Kamlesh Singh"
//     console.log(userName);
//     console.log(this.userName); // undefined
// }

// fun1()

// const fun2 = function () {
//     let userName = "Kamlesh Singh"
//     console.log(userName);
//     console.log(this.userName); // undefined
// }

// fun2()
// const fun3 = () => {
//     let userName = "Kamlesh Singh"
//     console.log(userName);
//     console.log(this.userName); // undefined
// }

// fun3()

// Arrow Function 
const add = (n1, n2) => {
    return n1 + n2  // explicit return 
}
console.log(add(2, 5));

// inplicit return 
// const add2 = (n1, n2) => n1 + n2
const add2 = (n1, n2) => (n1 + n2)
console.log(add2(2, 5));

// return object 
const funObj = () => ({ userName: "Kamlesh Singh" })
console.log(funObj());