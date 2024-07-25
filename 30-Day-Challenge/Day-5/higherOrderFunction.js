//  Task - 9 
function Welcome() {
    console.log("HI");
}

function Bye() {
    console.log("BYE");
}
function fun(greeting, num) {
    while (num > 0) {
        greeting();
        num--;
    }
}
fun(Welcome, 2);
fun(Bye, 2)


// Task - 10
function fun1(value) {
    return value + 10;
}
function fun2(value) {
    return value * 10;
}

function hof(f1, f2, val) {
    result1 = f1(val);
    result2 = f2(result1);
    return result2;
}

console.log(hof(fun1, fun2, 5));