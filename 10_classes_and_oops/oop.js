const user = {
    username: 'hitesh',
    loginCount: 9,
    signedIn: true,

    getUserDetails: function (){
        // console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
    }

}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this   // Implicitly defined , not necessary to write
}

const user1 = new User('alok', 12, true)
const user2 = new User('alokk', 13, false)

console.log(user1);
console.log(user2);

