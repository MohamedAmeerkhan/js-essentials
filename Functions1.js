
// const fetch=require("node-fetch");
// async function resolvedPromoise(){
//     let response=await fetch('https://api.github.com/users/github');
//     let responseBody=await response.json();
//     console.log(responseBody);
// }
// resolvedPromoise()

//function is also an objects which will have property and method

function addition(sum1,sum2)
{
    let results= sum1+sum2;
    return results;
}
console.log(addition.length);
console.log(addition.toString());
