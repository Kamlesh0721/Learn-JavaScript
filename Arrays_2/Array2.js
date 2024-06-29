const marvelHeroes = ["Wanda", "Captain America", "Thor", "Captain Marvel", "Ironman", "Hulk", "She Hulk", "Spiderman", "BlackPanther", "Blackwidow", "Hawkeye"]
const dcHeroes = ["Wonder Women", "Batman", "Superman", "Flash", "Cyborg", "Arrow"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);  // Store entire dcHeroes array inside marvelHeroes
// console.log("===============");

const Heroes = marvelHeroes.concat(dcHeroes)
console.log(Heroes);

// Spread Operator- It is more prefered because in this we cancancat more than 2 array at a time
//  but in concat we can only cancat 2 arrays

Heroes2 = [...marvelHeroes, ...dcHeroes]
console.log(Heroes2);

// flat 

const arr1 = [1, 2, 3, [10, 20], 4, [101, 111, 121, [22, 33, 44]]]
// const flatArr = arr1.flat(1) // flat array to depth 1
// console.log(flatArr);

const flatArr2 = arr1.flat(Infinity)
console.log(flatArr2);

