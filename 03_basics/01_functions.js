//initialization

function sayMyName(){
    console.log("A");
    console.log("L");
    console.log("O");
    console.log("K");
}

// sayMyName()

// function addTwoNumbers(number1, number2){  //number1 & number2 are parameters
//     console.log(number1+number2);
// }

// addTwoNumbers(3,4);   //3 & 4 are arguments

function addTwoNumbers(number1, number2){  //number1 & number2 are parameters
    // let result = number1 + number2
    // return result

    return number1+number2   //can be written this way
}

const result = addTwoNumbers(3,5)

// console.log("Result: ",result)

function loginUserMessage(username){
    // if (username===undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("alok"));

// console.log(loginUserMessage());  //output => undefined just logged in

function calculateCartPrice(...num1){   // (...) is a rest operator , we can any number of values
    return num1
}

// console.log(calculateCartPrice(200,400,500))

const  user= {
    username: "alok",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
