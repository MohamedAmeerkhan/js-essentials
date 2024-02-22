let string = "Hello World";
let splitedString=string.split(' ');
console.log(splitedString);
let splitedString1=string.split('W')
console.log(splitedString1);



let str="App name {12345} submitted";
let start=str.indexOf('{');
console.log(start);
let end=str.lastIndexOf('}');
console.log(end);
let appName=str.slice(start+1,end)
console.log(`AppName: ${appName}`);