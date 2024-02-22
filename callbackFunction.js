function a()
{
    console.log(`A Function`);
}
function b()
{ 
   setTimeout(()=>{
console.log(`B Function`);
   },2000)
   
}
function c()
{
    console.log(`C Function`);
}
// a();
// b();
// c();

// function printMessage(message)
// {  
//     console.log(`Calling call back function`);
//     console.log(message);
// }
// printMessage('Test Automation')

function main(name,greeter)
{   
    console.log(`calling main function`);
    let greetMessage=`Hello, ${name}`; //action of async operations
    console.log(typeof greetMessage);
    console.log(typeof greeter);
    return greeter(greetMessage); //attached this value to the call back function
}
// main('Rob',printMessage)
main('Rob', function(value){
    console.log(value);
})
let finalOne=main('Rob', (value1)=>{
    return`Arrow Function: ${value1}`;
})
console.log(finalOne);

// function textMessage(msg)
// {
// console.log(`This is call back function`);
// console.log(msg);
// }

// function mainText(userName,messages)
// {
//     console.log(`This is main function`);
//     let textMessage= `Hello!, ${userName}`;
//     messages(textMessage);
//     // console.log(textMessage);
// }
// mainText('Rob',textMessage)