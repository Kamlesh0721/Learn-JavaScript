// function one() {
//     let userName = "Kamlesh Singh"
//     function two() {
//         let email = "kamleshsingh0198@gmail.com"
//         console.log(userName + " " + email);
//     }
//     // console.log(email); // give error email is local variable of two
//     two()
// }
// one()

// Different Type of function access

fun1()   // Can be accessed before initialization
function fun1() {
    console.log("First Function");
}
// fun1()

// fun2()  //  Can not be accessed before initialization
const fun2 = function () {
    console.log("Second Function");
}
// fun2()

// fun3()  // Can not be accessed before initialization
const fun3 = () => {
    console.log("Third Function");
}
fun3()