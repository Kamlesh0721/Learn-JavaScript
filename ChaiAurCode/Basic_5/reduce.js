const num = [1, 2, 3, 4, 5]
num.reduce((acc, currVal) => {
    console.log(`Accumulatore : ${acc}, Current Value : ${currVal}`)
}) // if we donot give acc value then it will take num[1] as accumulator

num.reduce((acc, currVal) => {
    console.log(`Accumulatore : ${acc}, Current Value : ${currVal}`)
    return acc + currVal; // now next acc will be = acc+currVal

}, 0) // accumulator =0

const shoppingCart = [
    {
        item: "Mobile",
        price: 40000
    },
    {
        item: "Charger",
        price: 2000
    },
    {
        item: "Earphone",
        price: 2500
    }
]
const pay = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(`Total Bill : ${pay}`)