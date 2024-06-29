// const tinderUser = new Object() // Singleton Object
const tinderUser = {  // Not a singleton object
}
tinderUser.id = "Sam121"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    full_name: {
        first_name: "Kamlesh",
        last_name: "Singh"

    }
}

// console.log(regularUser.full_name.first_name);
// console.log(regularUser.full_name.last_name);


const obj_1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj_2 = {
    4: "d",
    5: "e",
    6: "f"
}
const obj_3 = {
    7: "g",
    8: "h",
    9: "i"
}

// const mainObj = Object.assign(obj_1, obj_2, obj_3) // this will also work
const mainObj = Object.assign({}, obj_1, obj_2, obj_3) // but this is correct way of doing it as per documentation
console.log(mainObj);

// we can also use spread operator here 
const mainObj2 = { ...obj_1, ...obj_2, ...obj_3 }
console.log(mainObj2);

// Object.keys() and Object.values  - both have return type array

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));

// entries -make array of key value
console.log(Object.entries(tinderUser));

// hasOwnProperty
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // if it contains isLoggedIn return true else return false

// Object in Array

const arr = [
    {
        id: 101,
        email: "user101@gmail.com"
    },
    {
        id: 102,
        email: "user102@gmail.com"
    }
]
console.log(arr);
console.log(arr[1].id);
console.log(arr[1].email);