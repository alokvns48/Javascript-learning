const user= {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   //global object in node is {}  and in browser is window

// function chai(){
//     let userName = "alok"
//     console.log(this.username)
// }
//
// chai()

// const chai = function (){
//     let userName = "alok"
//     console.log(this.username)
// }
//
// chai()

const chai = () => {
    let userName = "alok"
    console.log(this.username)
}

// chai()


// Arrow Function

// const   addTwo = (num1,num2) => {
//     return num1+num2
// }
//
// console.log(addTwo(3,4))

//other method

// const   addTwo = (num1,num2) =>  num1 + num2  //Implicit Return

// const   addTwo = (num1,num2) =>  (num1 + num2)   // {} curly braces is not used

const   addTwo = (num1,num2) =>  ({username: "alok"})  //for objects

console.log(addTwo(3,4))




