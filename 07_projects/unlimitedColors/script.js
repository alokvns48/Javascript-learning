// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    
    for(let i= 0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
    
}
// console.log(randomColor());
const changeBg=  function (){
    document.body.style.backgroundColor=randomColor()
    console.log("started")
}

let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBg,1000);
    }
   
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
    console.log("stopped");
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);


