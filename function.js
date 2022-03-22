//function definition
//function call

function add(a,b) //parameter
{
console.log("add function definition...");
console.log(a+b);
}

const multiply = (x,y) =>{
    console.log("multiply function definition...");
    console.log(x*y);
}

// function multiply()
// {
//     console.log("multiply function definition...");
//     console.log(a*b);
// }


//add(4,5);
//add(10,20); //arguments
//add(20,30);

//multiply(2,3);


//code reusability 
//modularity


const sum = (a,b,c) =>{
    return a+b+c;
}
average=sum(10,20,30)/3;
console.log(average);