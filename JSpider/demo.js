// function createCounter() {
//   let count = 0;

//   return function () {
//     count += 1;
//     console.log(count);
//   };
// }

// const counter = createCounter();
// counter(); // Logs: 1
// counter(); // Logs: 2
// counter(); // Logs: 3

console.log(countDigit(124));
function countDigit(num){
    let digit=0;
    while(num>0){
        num=Math.floor(num/10);
        digit++;
    }
    return digit;
}


console.log(x);
var x=5;

