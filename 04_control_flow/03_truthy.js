const userEmail = []

// if (userEmail) {
//     console.log("Got user email")    //truthy=>If string have value then assumed true
// } else {
//     console.log("User dont have email")
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){} -> empty function

// if (userEmail.length ===0){
//     console.log("array is empty")
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10  // => 10
// val1 = null ?? 10  // =>10
// val1 = undefined ?? 15  // => 15
// val1 = null ?? 10 ?? 20  // => 10 (first)

// console.log(val1)

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

