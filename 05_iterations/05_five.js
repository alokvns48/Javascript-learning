// for each  => it does not return anything

const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach(function (item){     // CallBack Function  => function (val){}
    // console.log(item)
})

coding.forEach((val) => {    // Arrow function ->  () => {}
    // console.log(val)
})

function printMe(item){
    // console.log(item)
}

coding.forEach(printMe)


coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName)
})
