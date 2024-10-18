// const obj=new Object;
// const arr=new Array;

// console.log(obj);
// console.log(arr); 


obj1={
    name:"Kamlesh",
    age:22,
}
obj2={
    age:23, // first check here age is not present here then serarch in parent
    city:"Haldwani",
    state:"Uttarakhand",

    __proto__:obj1,
}

// console.log(obj2.name);
// console.log(obj2.age);

function MyPrototype(name){
    this.name=name;
}
// MyPrototype.prototype=obj1; // here we do not need to write __proto__ 
const proto1=new MyPrototype("Aman");
proto1.__proto__=obj1;
console.log(proto1.name);
console.log(proto1.age);

// Create your own prototype (property) and add
const arr=["Kamlesh Singh",22];
Array.prototype.show=function(){
    console.log(...this);
}
// arr.show();

// show prototype is added in array so any array can access it
const arr2=["Aman",25];
// arr2.show();

// ex-2 convert to object
Array.prototype.convertToObject=function(){
    const obj=new Object;
    this.forEach(element => {
        obj[element]=element;
    });
    return obj;
}
// console.log(arr2.convertToObject())

