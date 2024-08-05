let greeting = (person, typeOfGreeting) => {
    console.log(person(typeOfGreeting));

}

let nani = (typeOfGreeting) => {
    // console.log(`${typeOfGreeting} nani`);
    return `${typeOfGreeting} nani`
}

let chacha = (typeOfGreeting) => {
    console.log(`${typeOfGreeting} chacha`);
}

let friend = (typeOfGreeting) => {
    console.log(`${typeOfGreeting} friend`);
}

greeting(nani, "Namaste")
// greeting(chacha, "Ram Ram")
// greeting(friend, "Hello")
