// filter practice
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// print all books whose genre is History
const ans = books.filter((book) => {
    return book.genre == 'History'
})
// const ans = books.filter((book) => book.genre == 'History') // Implicit return
console.log(ans);

// map Practice
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const numMul2 = numbers.map((num) => num * 2) // Implicit return 
// console.log(numMul2);

// chaining
// const numMul2Min5 = numbers.map((num) => num * 2).map((num) => num - 5)
const numMul2Min5 = numbers
    .map((num) => { return num * 2 })
    .map((num) => { return num - 5 })
console.log(numMul2Min5);