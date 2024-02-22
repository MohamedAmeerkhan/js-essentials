let str ="Hello world"
console.log(str.charAt(6));
console.log(str.length);


let str1=`JavaScript`;
console.log(`Code: ${str1}`);
let str2=String("Hello Word")
console.log(str2);

const currentDate = new Date().toDateString();
console.log(currentDate);

let startDate="2024-02-19"
let endDate="2024-02-26"
let messageToUser = `You acccount start date ${startDate} and will be ending on ${endDate}`
console.log(messageToUser);


let fileName="  invoice.pdf"; //voice.csv, voice.png
if(fileName.toUpperCase().trim() === "INVOICE.PDF")
{
    console.log(`file matched`);
}
else if(fileName === "current.pdf")
{
  console.log(`not matched`);
}
else if(fileName.startsWith(`invoice`))
{
 console.log(`starting correct`);
}
else if(fileName.endsWith(`.pdf`))
{
    console.log(`ends with `);
}
else{
    console.log('ERROR FILE');
}