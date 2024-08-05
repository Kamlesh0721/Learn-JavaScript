// IIFE - Immediately invoked function expression
// sometime there are chances of pollution from global scope so to avoid that we use IIFE

// syntax : (functionDeclaration)(functionExecution)


// function fun() {
//     console.log("DB Connected");
// }
// fun() 
// we can also do this to start function execution immediately after initialization but sometimes in this 
// there are some chances of global scope pollution so to avoid that we use IIFE

// named IIFE
(function fun() {
    console.log("DB Connected");
})();
// (* IMP ) Here it is necessary to enter semicolon " ; " otherwise interpreter will not know where to stop
// semicolon is only necessary . If we want to write 2 IIFE one after another

(function fun2() {
    console.log("DB Connected");
})();

// arrow function (unnamed IIFE)
(() => {
    console.log("DB Connected");
})();

// How to pass parameter to function 
((name) => {
    console.log(`HI , ${name}`);
})("Kamlesh")