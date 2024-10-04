let arr=[1,2,3,4,6];
console.log(...arr);

let obj={
    id:1,
    name:"Kamlesh",
}
let objMain={
    ...obj,
    email:"kamleshsingh0198@gmail.com",
}
console.log(objMain);

function fun(num1,num2,...rest){
    console.log(num1,num2);
    console.log("rest",rest);
    console.log("spread",...rest);
}
fun(10,20,30,40,50);