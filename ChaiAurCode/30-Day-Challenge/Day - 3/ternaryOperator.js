// Task - 6
let num = 32;
(num % 2 === 0) ? console.log("Even") : console.log("Odd");

// Task - 7
let year = 1998;
if (year % 4 == 0) {
    if (year % 100) {
        if (year % 400) {
            console.log("Leap Year");
        }
        else {
            console.log("Not a Leap Year");
        }
    }
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}