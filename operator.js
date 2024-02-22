"use strict";


// //assignment operator
// //basics
// let value1=123;
// let value2=456;
// //chaining
// let x=y=1;
// //+=
// let value=2;
// //+= operator
// let start=5;
// for(let i=1; i<=5; i++)
// {
//     //start=start+i;
//     start+=i;
//     console.log(start);
// }



// //remainder %
// let a=10;
// let b=5;
// console.log(a%b);
// //increment and decrement
// for(let u=0; u<=5; u++)
// {
//     console.log(u);
// }
// for(let q=10; q>=1;q--)
// {
//     console.log(q);
// }

// let three= "3";
// console.log(parseInt(three));
// console.log(typeof three);

// let number="12";
// console.log(typeof number);
// let strNum=+number;
// console.log(typeof strNum);
// let againStr=strNum.toString()
// console.log(typeof againStr);


//comparison operator
// let a = "1";
// let b = 1;
// console.log(a==b);
// console.log(a===b);
// let c=+a;
// console.log(typeof c);


//logical operator
// let value=2;
// if(typeof value === "string" && value.length >1)
// {
//     console.log(`given value ${value} is a string`);
// }
// else
// {
//     console.log(`this is not a valid string`);
// }

// let date="Monday";
// if(date === "Sunday" || date === "Saturday")
// {
//     console.log("this is weekend");
// }
// else{
//     console.log("Sorry this is weekday");
// }

// let firstName="";
// let lastName="Molloy";
// if(!lastName)
// {
//     console.log(`please enter your last name `);
// }
// else
// {
//     console.log('please enter your first name');
// }
// //logical OR default
// let targettedBrowser=null;
// let browserOpened=targettedBrowser || "Firefox" || "Edge";
// console.log(browserOpened);

//<expression> ? "value1" : "value2"

let testRunner="remote";
let runningMode = testRunner === "Local" ?  "Local Env" : testRunner ==="Cloud" ? "Cloud Env" : "Failure Env"
console.log(`test cases are running in ${runningMode}`);

