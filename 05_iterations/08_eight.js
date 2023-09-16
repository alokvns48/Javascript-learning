// reduce()

const myNums = [1, 2, 3]

// const myTotal= myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)  // 0 -> initial value

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js Course",
        price: 999
    },
    {
        itemName: "java Course",
        price: 1999
    },
    {
        itemName: "python Course",
        price: 1299
    },
    {
        itemName: "android Course",
        price: 6999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay)