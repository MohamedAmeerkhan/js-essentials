// // function greet(name){
// //     console.log('Hello' +' ' +name);

// // }
// // greet('Stephen');

// // function square(number)
// // {
// //    let doubledNumber =number*number;
// //    console.log(doubledNumber);
// //    return;
// // }
// // // let squaredNumber=square(3);
// // // console.log(squaredNumber);
// // square(9);


// // let value=0;
// // value=10;
// // console.log("the value will be:",value);

// // const APP_URL= "https://www.google.com";
// // console.log(APP_URL);

// // //let and const are scope blocked
// // let count=0; //change this variable type to var let const and check the error
// // if(true)
// // {
// //     let count=10;
// //     console.log('Within IF BLOCK:',count);
// // }
// // console.log('Outside IF BLOCK:',count);

// let str1='Hello';
// console.log(typeof str1);
// let str2 =`${str1}, World!`
// console.log(str2);  // template literal

// let number=5;
// let decimalNumber=5.5;
// let isSwitchedON= true;
// let isSwitchedOFF = false;


// let notMandatoryField=null;
// let notDefinedValue;
// console.log(notMandatoryField);
// console.log(notDefinedValue);


// var str3="12233444";
// console.log(typeof str3);
// console.log(`the type of: ${typeof (str3)}`);

// let abc=NaN;
// console.log(`the type of abc:`,typeof abc);
// let cde;
// console.log(`the type of cde:`,typeof cde);

// let number=10+NaN;
// let checking=10*undefined;
// console.log(checking);
// let numberss=5+null;
// console.log(number);
// console.log(numberss);


// let string="12345";
// let var2='8.9';
// let number=parseInt(string)
// let var3=parseFloat(var2)
// console.log(var3);
// console.log(typeof var3);
// console.log(number);
// console.log(typeof number);


// let str='23';
// console.log(typeof str);
// let convertedNumber= +str;
// console.log(convertedNumber);
// console.log(typeof convertedNumber);
// let str1=12133;
// console.log(typeof str1);
// let changeString = str1.toString()
// console.log(typeof changeString);
// // console.log(changeString);

// let val="Mac" + "Book"
// console.log(val);
// console.log(typeof val);


let a =0;
if(a) console.log("a is ",a);

const todayDate= new Date().toDateString();
const currentDate= new Date()
console.log(currentDate);
console.log(todayDate);

"use strict";

let givenStr = "SOUTH AFRICA";
givenStr = givenStr.toLowerCase();
let strArr = givenStr.split(" ");
console.log(strArr);
//let firstWord = strArr[0].charAt(0).toUpperCase() + strArr[0].slice(1);
let firstWord = strArr[0].charAt(0).toUpperCase();
console.log(firstWord);
let secondWord = strArr[1].charAt(0).toUpperCase() + strArr[1].slice(1);
let modifiedStr = `${firstWord} ${secondWord}`;
console.log(modifiedStr);