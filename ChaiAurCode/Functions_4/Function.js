function add(num1, num2) {
    console.log(num1 + num2);

}
// add(2, 4)
// add(2, "4")

// console.log(add(2, 4)); // Undefined

function userLogin(userName) {
    // if (userName===undefined) {
    //     console.log("Please Enter User Name");
    //     return
    // }
    if (!userName) {
        console.log("Please Enter User Name ");
        return
    }
    return `${userName} logged in`
}
console.log(userLogin());
console.log(userLogin("Kamlesh Singh"));
