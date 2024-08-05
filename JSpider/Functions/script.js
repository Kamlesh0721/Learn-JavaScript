function introduction(name, email, phone = 'personal') { // we can set default value to parameter
    console.log(name)
    console.log(email)
    console.log(phone)
}

introduction("Kamlesh", "kamleshsingh0198@gmail.com")

// Arrow Function - new method-old method might faces some problem with this keyword
//  It is most commonly used way 

let func = (name) => {
    console.log("arrow Func");
    console.log(name);
    console.log("My name is :" + name);
    console.log("My name is :", name);
}
func()
func("Kamlesh")

let add = (n1, n2) => {
    // console.log("Addition of n1 and n2 is " + n1 + n2);
    // console.log("Addition of n1 and n2 is " + (n1 + n2));
    // console.log("Addition of n1 and n2 is ", n1 + n2); // Here output is number 
    //but in other output is string because it is calculating output and then concatinating it with string

    console.log(`${n1} + ${n2} = ${n1 + n2}`)
}

// ----input using prompt ----
// ---- prompt always returns string type so we need to typecast it to Number ---
// num1 = Number(prompt("Enter first Number : "))
// num2 = Number(prompt("Enter second Number : "))

// ---- typecasting using parseInt ----
num1 = parseInt(prompt("Enter first Number : ")) // parseInt only reads number from starting and ignores 
// all spaces and string after number for ex age = 25 yrs it will only include 25 and ignore yrs
num2 = parseInt(prompt("Enter second Number : "))
add(num1, num2)

// ---- return  ----
let mul = (num1, num2) => {
    return num1 * num2
}
console.log(mul(5, 2));