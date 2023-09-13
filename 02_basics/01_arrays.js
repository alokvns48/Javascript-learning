//arrays

const myArr= [2,4,6,8,10];

console.log(myArr[3])

const myHeros= ["Shaktiman", "naagraj"]

console.log(myHeros[0]);

// Arrays Methods

myArr.push(6)  //add value to the array
console.log(myArr);  // [2,4,6,8,10,6]

myArr.pop(); //removes the last element of the array
console.log(myArr)

myArr.unshift(4)  //add element at the start of array
console.log(myArr);

myArr.shift()  //removes the array from start
console.log(myArr)

console.log(myArr.includes(9));  //check whether element is present in array
console.log(myArr.indexOf(4));  //index of the element of array

const newArr= myArr.join()  //converts to string

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)  //string

//slice, splice

console.log("A ",myArr);

const myn1= myArr.slice(1,3) //3 not included  /*It does not manipulate the original Array*/

console.log(myn1); //[4,6]
console.log("B ",myArr);

const mynn2= myArr.splice(1,3)  //3 is included /*It manipulate the original Array*/

console.log(mynn2); //[4,6,8]
console.log("C ",myArr)





