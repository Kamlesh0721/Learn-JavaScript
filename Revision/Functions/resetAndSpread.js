// Rest 
function fun1(a,b,c,...other){
console.log(a,b,c,other);

}

fun1(1,2,3,4,5,6);

const namesArr=["Kamlesh","Ankit","Ajay","Vijay"];
function fun2(name1,name2,name3){
    console.log(name1,name2,name3);
}
fun2(...namesArr)


// spread and rest in Object 

const user={
    name:"Kamlesh",
    age:23,
    hobbies:["Running","Chess"],
}

// Rest
const {name,...userInfo}=user;
console.log(name);
console.log(userInfo)

// Spread
const newUser={
    ...user,
    age:22,  // Override age
}
console.log(newUser);