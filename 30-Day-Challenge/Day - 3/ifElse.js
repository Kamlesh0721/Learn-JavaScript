// Task - 1
let num = "Hello";
if (num > 0) {
    console.log("Positive Number");
} else if (num == 0) {
    console.log("Zero");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Invalid Input");
}

// Task - 2

let age = 30;
if (age >= 18) {
    console.log("Congratulation ! \nYou are Eligible to vote.");
} else {
    console.log("Sorry ! \nYou are not Eligible.");
}

// Task - 3
let num1 = 100;
let num2 = 234;
let num3 = 293;
let largestNum;
if (num1 > num2) {
    if (num1 > num3) {
        largestNum = num1;
    } else {
        largestNum = num3;
    }
} else if (num2 > num3) {
    largestNum = num2;
} else {
    largestNum = num3;
}
console.log(largestNum);

