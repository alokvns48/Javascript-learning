const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   //add the array insinde the arrary
//
// console.log(marvel_heros);  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//
// console.log(marvel_heros[3][1]);  //flash

const allHeros = marvel_heros.concat(dc_heros)    // join two arrays
console.log(allHeros);   // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const all_new_heros = [...marvel_heros, ...dc_heros]  //separate each element of the array  (Good Practice)

console.log(all_new_heros);  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_another_array);  // [1, 2, 3,4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("Hitesh"))   // check whether it is present in the array
console.log(Array.from("Hitesh"))  // convert values into array
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments. =>[100, 200, 300]