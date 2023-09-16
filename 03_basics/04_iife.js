// Immediately Invoked Function Expression (IIFE)  => used to remove the pollution of global scope

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

//named iife

(function chai(){
    console.log(`DB CONNECTED`);
})();

//unnamed iife

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('alok')  //passing value


// ()()

