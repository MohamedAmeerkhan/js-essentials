// let currentDate = new Date().toDateString();
// console.log(currentDate);

// let str="Cypress.io"
// let reversedString=str.split().reverse().join('');
// console.log(reversedString);


function reverseString(str)
{
    let reversedString=str.split('').reverse().join('');
    console.log(typeof reversedString);
    return reversedString;
    
}let final=reverseString('Hello')
console.log(final);