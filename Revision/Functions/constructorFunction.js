// we can not use arrow function
function Car(model,color,engine){
    this.model=model;
    this.color=color;
    this.engine=engine;
}
let c1=new Car(1001,"Black","1200cc");
console.log(c1);