//Singleton

// const tinderUser = new Object()  // object can be declared this way also  => it is singleton object

const tinderUser = {}  // it is non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Alok",
            lastname: "Pandey"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3= {obj1,obj2}  //not a good practice

// console.log(obj3) //print object inside object

// const obj3= Object.assign({}, obj1,obj2)  // The Object.assign() static method copies all enumerable  own properties  from one or more source objects to a target object  => {} acts as target object

const obj3 = {...obj1, ...obj2}  //will be used more

console.log(obj3)


// Objects inside array

const users = [
    {
        id: 1,
        email: "alokvns48@gmail.com"

    },
    {
        id: 2,
        email: "alokvns2002@gmail.com"
    }
]

console.log(users[0].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser))  //print the keys of object
console.log(Object.values(tinderUser))  //print the values of object
console.log(Object.entries(tinderUser))  // array is created of key and its values

console.log(tinderUser.hasOwnProperty('IsLoggedIn')) //check whether the property is available


/*Object Destructure*/

const course= {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} =  course  //Destructure
console.log(courseInstructor)

const {courseInstructor: instructor} =  course  //can be done this way also
console.log(instructor)

/*JSON format*/

// {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "free"
// }

