// Q1 - check number is prime or not using funciton
// let isPrime = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };

// for(let i=1;i<100;i++){
//     if(isPrime(i)){
//         console.log(i);
//     }
// }

// Q2-Count no of digit
// let countDigit = (num) => {
//   let count = 0;
//   while (num > 0) {
//     num = Math.floor(num/ 10);
//     count++;
//   }
//   return count;
// };

// console.log(countDigit(1234));

// Q3-SumOf Digits

// let sumOfDigits = (num) => {
//   let sum = 0;
//   while (num > 0) {
//     let lastDigit = Math.floor(num % 10);
//     sum += lastDigit;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// };
// console.log(sumOfDigits(12345));

// Q4 - Reverse a number
let reverseNumber = (num) => {
  let rev = 0;
  while (num > 0) {
    let lastDigit = Math.floor(num % 10);
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return rev;
};
// console.log(reverseNumber(12345));

//Q5 - function that take two number give sum

let rangeSum = (start) => {
  let sum = 0;
  let end = start + 100;
  while (start <= end) {
    sum += start;
    start++;
  }
  return sum;
};
console.log(rangeSum(1));

// Q6 - function to check number is palindrome or not

let checkPalindrome = (num) => {
  if (num === reverseNumber(num)) {
    return true;
  }
  return false;
};
console.log(checkPalindrome(21));
