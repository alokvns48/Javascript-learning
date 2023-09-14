// singleton
// object.create

// object literals

//initialization

const mySym = Symbol("key1")

const JsUser = {      //{} is used to create object
    name: "Hitesh",
    "full name": "Alok Pandey",
    age: 18,
    // mySym: "mykey1",   // it not good practice => it is stored as string not as symbol
    [mySym]: "mykey1",//  use []
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing

console.log(JsUser.email)

console.log(JsUser["email"])  // (Good Practice)

console.log(JsUser["full name"])

console.log(JsUser[mySym])  //printing the symbol

//overwriting

JsUser.email = "alokvns48@gmail.com"
console.log(JsUser["email"])

// Object.freeze(JsUser)  //  Freezes the object

JsUser.email= "changed@email.com"  // no effect as JsUser isfreezed

console.log(JsUser)


// Greetings

JsUser.greeting = function (){
    console.log("hello Js user");
}

JsUser.greetingTwo = function (){
    console.log(`hello Js user, ${this.name}`);  // referring to name
}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());

