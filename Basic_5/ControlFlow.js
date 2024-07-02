balance = 1000
if (balance > 500) {
    console.log(balance);
}

// if (balance > 500) console.log(balance), console.log(balance),
//     console.log(balance); //Inlie if statement - this is also right way but it is not recommended because it is not easy to read

let day = 3

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");// if we will not write break statement it will print all case except break
        break;
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturdy");
        break;
    default:
        console.log("Sunday");
}

// Imp - Truthy Value and Falsy value

// Falsy Value
// false, 0,-0,BigInt 0n,"",null,undefined,Nan

// Truthy Value
// "0","false"," ",[],{},function(){}

// How to check array is empty or not 
const users = ["Kamlesh", "Aman", "Saket", "Raj"]
console.log(users.length)

const obj = {
    name: "Kamlesh"
}
console.log(Object.keys(obj).length);