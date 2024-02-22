//multiple paramteres
let addition=(number1,number2)=>
{
    let total=number1+number2;
    return total;
}
let finalResults=addition(100,100);
console.log(finalResults);

//no parameters
let addition1=()=>  10+10;
let finalResults1=addition1();
console.log(finalResults1);

//single parameters
let multiplication=(number)=>{
    let total=number*number;
    return total;
}
let expectedResults=multiplication(10)
console.log(expectedResults);

let arr=['windows','mac','linux']
arr.forEach((value,index,array)=>{
console.log(value);
console.log(index);
console.log(array);
console.log(array[0])
console.log(array[1]);
console.log(array[2]);

})