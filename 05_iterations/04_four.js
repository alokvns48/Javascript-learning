// for in loop for objects

const myObject = {
    js: 'javascript', cpp: 'C++', rb: 'ruby', swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key)
}

for (const key in myObject) {
    // console.log(myObject[key])
}

for (const key in myObject) {
    // console.log(`${key} shortcut is ${myObject[key]}`)
}

// for in loop -> Arrays

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key])
}

