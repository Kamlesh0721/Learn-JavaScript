// Activity 1
const evenOdd = function (n) {
    if (n % 2 == 0)
        console.log("Even");
    else
        console.log("Odd");
}
evenOdd(5)

squareOf = (n) => {
    return n * n;
}
console.log(squareOf(3));

// Activity 2
function maxOfNum(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is greater than ${num1}`);
    } else {
        console.log(`${num1} is equal to ${num2}`);
    }
}
maxOfNum(5, 6)

function concatStr(str1, str2) {
    return str1 + str2;
}
console.log(concatStr("Hello , ", "How are you ?"));

// Activity - 3
sum = (n1, n2) => {
    return n1 + n2;
}
console.log(sum(2, 4));

contains = (str, char) => {
    for (const currChar of str) {
        if (currChar === char) {
            return true;
        }
    }
    return false;
}
console.log(contains("Kamlesh", "k"));

// Activity - 4
product = (n1, n2 = 10) => {
    return n1 * n2;
}
console.log(product(5, 2))
console.log(product(5))
