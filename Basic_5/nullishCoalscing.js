// Nullish Coalscing Operator (??): null,  undefined (if value is null or undefined otherwise it will choose other option )

let value;

// value = 10 ?? 5; // 10
// value = null ?? 5;  // 5
// value = 5, null; // 5
// value = undefined ?? 4; // 4
// value = NaN ?? 4; // NaN - It only works in case of null and undefined

// value = null ?? undefined // undefined -if first value is null or undefined it will choose second option 
// value = undefined ?? null // null

// value = null ?? 10 ?? 20 // 10
value = null ?? undefined ?? 10 //10


console.log(value);
