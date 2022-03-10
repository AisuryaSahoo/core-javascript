//for 
// while 
// do while 
// for each
for(a=1;a<=10;a++)   // a++ => a=a+1
{
    console.log("Good morning"+a);
    //a++
}

i=1
while(i<=5){  //it executes only when the condition is true
    console.log("Good evening"+i);
    i++;
}


j=20
do{   //it executes at least one time even if the condition is false
    console.log("Good night"+j);
    j++;
}while(j<=15)


arr=[10,20,30,40,50]  //array

arr.forEach(e=>{console.log("hello",e)})  

arr.forEach(function(e){
    console.log("hello",e)
})



