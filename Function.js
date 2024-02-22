//return the value
function addTwoValue(num1,num2)
{
    let sum=num1+num2;
    return sum;
}
let storedValue=addTwoValue('ameer','khan','mohamed'); //ignored the last value
let storedValueNaN1=addTwoValue(); //numerical value of undefined is null
let storedValueNaN2=addTwoValue(5)
console.log(typeof addTwoValue);
console.log(storedValue);
console.log(storedValueNaN1);
console.log(storedValueNaN2);

//not returned any thing
function clickAction()
{
    console.log(`clicking the given element`);
}
clickAction();

//anonymous function
//function without name assigned to variable

let addition=function (number1,number2)
{
    let addingTwoNumbers=number1+number2;
    return addingTwoNumbers;
}

let additionTotal=addition(5,5);
console.log(`Function without name assigned to variable ${additionTotal}`);


//function with name assigned to variable

let minus=function subtraction(number1,number2)
    {
        let subtract=number1-number2;
        return subtract;
    }
let minusResults=minus(10,5);
console.log(`Function with name assigned to variable ${minusResults}`);


//default parameters- should be placed second in the parameters

function greeting(name,greeting="Hello,Good Morning"){
    console.log(`${greeting} ${name}`);
    //return greeting;
}
greeting('Robert Molloy','Hi') //this will replace the default parameters


//passing undefined/falsy values

function printFullName(fname,mname,lname)
{ 
    if(mname &&lname &&fname)
    {
        console.log(`Full Name: ${fname} ${mname} ${lname}`);
    }
    else
    {
        console.log(`Full Name: ${fname} ${lname}`);
    }
    
}
printFullName('Rob','','Molloy')


//passing the objects named personObj as the parameters
function passedObjects(personObj)
{
    console.log(`Passing the objects Full Name:${personObj.firstName} ${personObj.lastName}`);
}
passedObjects({
    firstName:"Sanjai",
    lastName:"Kumar"
})


//rest parameters and argument objects

function sum(num1,num2,...numN)
{
    // console.log(arguments) //along with the index
    // console.log(arguments[1]); //only values
    // console.log(arguments.length); //method means brackert
    let total=0;
    for(let i=0;i<arguments.length;i++)
    {
      total+=arguments[i];
    }
    console.log(`total :${total}`);
    return total;
}
// let add=sum(2,3,4,5);
// console.log(add);
sum(5,5,5)


function adding(num1,num2)
{
    return num1+num2;
}
let finalAdd=adding(10,10)
console.log(`Return the expression: ${finalAdd}`);

function returnObject(num1,num2)
{
    let totally=num1+num2;
    return {object:totally}
}
let finalObjects=returnObject(25,25)
console.log(`End results in the objects:`,finalObjects);

//returning the functions
function returningFunction(num1,num2)
{
    return function()
    {
        return num1+num2;
    }
}
let returnedOutput=returningFunction(100,100);
console.log(`NO Name Function`,returnedOutput());
let noNameFunction=(500,500)
console.log(noNameFunction);

//return statement in conditional statement

function conditional(number1,number2)
{
    if(!number1 || !number2)
    {
        return "Error";
       // return; - returns undefined
    }
    let sum=number1+number2;
    return sum;
}
let conditionalTotal=conditional('',400);
console.log(conditionalTotal);

//self invovking functionss - only one self invoking can be executed at one time

(function multiplyTwoNumbers(num1,num2)
{
    let results=num1*num2;
    console.log(`Self invoking`,results);
})(10,10)

