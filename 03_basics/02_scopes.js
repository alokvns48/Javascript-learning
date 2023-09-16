//var c = 300
let a = 300   //global scope

if (true) {
    let a = 10   //local scope
    const b = 20
    // console.log("INNER: ", a);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "alok"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}

one()


if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++Interesting+++++++++++++++++++

function addOne(num) {
    return num + 1
}

addOne(5)

console.log(addOne(5))

const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(5));