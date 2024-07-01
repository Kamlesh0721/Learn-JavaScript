// function cartPrice(...total) {  // ... is known as rest operator here 
//     // it can also be called as spread operator depending on how it is used here it is rest operator
//     return total
// }
function cartPrice(price1, price2, ...total) {
    console.log(price1);
    console.log(price2);
    console.log(total);
}
console.log(cartPrice(100, 200, 30, 245));

// How to pass object in function
const productDetail = {
    product: "Charger",
    price: 499
}
function objectHandler(anyObject) {
    console.log(`product ${anyObject.product} , price ${anyObject.price}`);
}
objectHandler(productDetail)

// How to pass Array to Function
const arr = [10, 20, 30, 40]
function arrayHandler(anyArray) {
    return anyArray[0]
}
console.log(arrayHandler(arr));