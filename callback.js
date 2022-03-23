/*const display = () => {
    document.write("hello world");
}

setTimeout(function greet(){
    console.log("good morning");
}, 4000);  //async

console.log("hi how are you ?")
*/
//setInterval(display,5000);


//setTimeout(display,5000);


//-------------------------------------call back section -------------------------------

function takeClass(callback,message){   //callback<=rollCall
    console.log("I'm taking class")
    callback(message);

}

const rollCall = (msg) =>{
    console.log("Call roll no for presence or absence");
    console.log(msg)
}

takeClass(rollCall,"Hi sending good wishes");
takeClass(rollCall,"You should be mindfull in class")



