console.log(Array.isArray("Kamlesh"));

console.log(Array.from("Kamlesh")); // Convert to array

console.log(Array.from({ name: "Kamlesh" })); // It can not convet object Directyly (Imp) - returns empty String

let score_1 = 10;
let score_2 = 20;
let score_3 = 30;
console.log(Array.of(score_1, score_2, score_3));