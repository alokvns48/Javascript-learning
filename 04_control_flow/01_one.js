// if

// if (condition) {
//     statement;
// }

const isUserLoggedIn= true
const temperature = 41

// if (temperature<50){
//     console.log("Temperature is less than 50");
// }else {
// console.log("Temperatue is greater than 50");
// }
// <, >, <=, >=, ==, !=, === (also type checking), !==


// const score = 200
//
// if(score > 100){
//     const  power="fly"
//     console.log(`user power: ${power}`);
// }
//
// console.log(`user power: ${power}`);

const balance = 1000

// if (balance>500) console.log("test"), console.log("test2");  //dont use two statements (not good practice)

// if (balance<500){
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("balance less than 900")
// }else {
//     console.log("less than 1200")
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogole = false
const loggedInFromEmail = true

if( loggedInFromGoogole || loggedInFromEmail){
    console.log("User logged in")
}


if(userloggedIn && debitCard){
    console.log("Allowed to buy course")
}