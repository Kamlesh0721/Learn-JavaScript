let d = 100;
if (true) {
    let a = 100
    const b = 20
    var c = 30
    let d = 25
    console.log("inner d", d); // Local Scope
}

// console.log(a); // Error
// console.log(b); // Error
// console.log(c);    // it will not give error- this is why var is not used it scope is not fixed

console.log("outer d", d); // Global Scope