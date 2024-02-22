let currentDateString = new Date().toDateString()
console.log(currentDateString);
console.log(typeof currentDateString);
let sliceStartEnd=currentDateString.slice(0,3)
console.log(`sliced today's day ${sliceStartEnd}`);
let sliceStart=currentDateString.slice(3)
console.log(`sliced shows date ${sliceStart}`);


let todayDate=`2024-12-09`;
let reverseSlice=todayDate.slice(-1)
console.log(reverseSlice);


let fileName = "invoice.pdf";
let sqlQuery = ` SELECT * FROM {NAME}`;
let date = `2024-12-20`;
let replacedFileName = fileName.replace('pdf','csv');
console.log(`file changed to`,replacedFileName);
let replacedSqlQuery=sqlQuery.trim().replace('{NAME}','{WORK}');
console.log(`replaced SQL Query:`,replacedSqlQuery);
let replacedDate=date.replace(/-/g, ''); //this regEx completed removed the space
console.log(replacedDate);
