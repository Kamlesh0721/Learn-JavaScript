const obj1={
    name:"Kamlesh Singh",
    getName: function (){
        return this.name; // here writing this is necessary. // this holds referece of current object i.e. obj1
    }
}

console.log(obj1);
console.log(obj1.getName());

// 2nd way of creating a object

const obj2=new Object;
obj2.name="Ankit";
console.log(obj2);