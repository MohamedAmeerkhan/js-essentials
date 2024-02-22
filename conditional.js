let age=18;
if (age<=18) console.log("You are eligible to Vote");
else console.log("Sorry you cannot vote");

let abc=null;
console.log(typeof abc);
 abc=NaN;
 console.log(typeof abd);



 let fileExists="Yes";
 if(fileExists === "Yes") console.log("Please make use of the existing file");
 else console.log("Please go ahaead and creare the new file");

 //nested condition
let failingReason="Data Error";
if(failingReason==="Locators issue") console.log("Locators Error");
else if(failingReason === "Assertion Error") console.log("Assertion Error");
else if(failingReason === "Data Error") console.log("Data Error");
else console.log("New Error got in the test runner");

//if else inner condition
let dataFetching=false;
if(dataFetching === true) console.log("Make use of the new test data");
else 
{
    console.log("No data received"); 
    let errorSystem = "Update Failure";
    if(errorSystem === "Update Failure") console.log("DB update failure, continue the execution with data fetched");
    else console.log("fail the test cases");
}
// Use case 5: If else [Inner conditions]: Quering a database for test data
let isSuccess = false
if(isSuccess === true) {
    console.log(`>> Storing the db values..`);
} else {
    console.log(`No data recived`);
    let errorCode = "ACCEPT"
    if(errorCode === "ACCEPT") {
        console.log(`>> Continue the exection...`);
    } else {
        console.log(`>> Fail the test...`);
    }
}

//if in loop
for(let i=1;i<=10;i++)
{
if(i==5) break; console.log(i);  
}
console.log("completed the execution");
   

    