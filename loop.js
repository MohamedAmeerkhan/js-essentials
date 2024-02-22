for(let i=10;i>=1;i=i-1)
{
    console.log(i);
}


let arr=["apple",10,"samsung",20,"nokia",100];
let sum=0;
for(let i=0;i<arr.length;i++)
{
    let arrEle=arr[i];
    //console.log(arrEle);
    if(typeof arrEle === "number")
    {
        sum=sum+arrEle;
    }
}
console.log(sum);

let windows=["amazon","youtube","facebook"]
for(let i=0;i<windows.length;i++)
{
    windowsElement=windows[i]
    if(windowsElement === "facebook")
    {
        break;
  
    }
    console.log(`I am from IF LOOP ${windowsElement}`);
}

//for each
windows.forEach((value,index,array)=>{
    console.log(`for each`,value);
    console.log(`for each`,index);
    console.log(`for each`,array);

})


//while loops
let count=1;
while(true)
{
console.log(count);
if(count==10)
{
    break;
}
count ++;
}

//for in loop and for of loop
let obj={
    a:10,
    b:20,
    c:30
}
for (const key in obj) {
   console.log(key); //key
   console.log(obj[key]); //value
}

//for of loop - object cannot be iterable we cannot use there
for (const value of windows) {
    console.log(value);
    
}