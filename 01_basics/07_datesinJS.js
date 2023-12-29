//Dates

let myDate = new Date()

console.log(myDate.toDateString());  //Thu Nov 23 2023
//
console.log(myDate.toLocaleString());  // 23/11/2023, 4:28:00 pm
//
// console.log(typeof myDate);

let myCreatedDate= new Date(2023,00,23)
console.log(myCreatedDate);  //2023-01-22T18:30:00.000Z
// console.log(myCreatedDate.toLocaleString())
//
// let timeStamp = Date.now()
//
// console.log(timeStamp)  // in milliseconds
// console.log(Math.floor(myCreatedDate.getTime()/1000))  //In Seconds

let newDate = new Date()

console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));   // Thursday