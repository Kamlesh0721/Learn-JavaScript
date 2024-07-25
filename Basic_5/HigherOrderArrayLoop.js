// forof loop
// const arr = [10, 20, 30, 40, 50]
// for (const i of arr) {
//     console.log(i);
// }

// let Str = "Kamlesh Singh"
// for (const c of Str) {
//     console.log(c);
// }


// const map = new Map();
// map.set("name", "Kamlesh Singh")
// map.set("id", "kamleshsingh0198@gmail.com")
// map.set("name", "kamlesh")// It is known for unique keys and maintain order so name will not store again

// for (const iterator of map) { // print key and value togather in array
//     console.log(iterator);
// }

// for (const [key, value] of map) {  // seprate key and value
//     console.log(key, value);
// }



// const obj = {
//     game: "NFS",
//     game2: "Amazing Spiderman 2"
// }
// * objects are not iterable with forof loop
// for (const iterator of obj) { // give error
//     console.log(iterator);
// }

// for objects we have forin loop
// for (const key in obj) {
//     console.log(`${key} ${obj[key]}`);
// }

// forin loop in array

// const array = [101, 102, 103, 104]
// for (const i in array) {
//     console.log(i); // for in loop always give keys, in case of array key is index
//     // so to print array
//     console.log(array[i]);
// }


// forin loop in map
// const map2 = new Map;
// map2.set("India", "NewDelhi")
// map2.set("Uttarakhand", "Dehradun")
// for (const key in map2) {
//     console.log(key); // it will not print anything
// }
// map is not iterable with keys(forin loop will not work)
