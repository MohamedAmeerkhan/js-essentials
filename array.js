// let str="Ameer"
// let reversedStr = str.split('').reverse('').join('')
// console.log(reversedStr);


// let arr =[1,2,3,4]
// arr.push(5); //array is mutable
// console.log(arr);
// console.log(typeof arr[2]);
// console.log(arr[2]);
// console.log(arr["4"]);

// let fruits=["apple","banana","muskmelon"]
// console.log(fruits);
// fruits[0]="orange"; // adding using the index value
// console.log(fruits);
// console.log(`fruits length:`,fruits.length);
// fruits.push('mango')
// console.log(fruits);

// //constructor function
// let constructorFruits=Array("apple","banana","orange")
// console.log(constructorFruits);
// console.log(typeof constructorFruits);
// console.log(constructorFruits.constructor); // base is an array

// //using objects
// let objectFruits=new Array("apple","grape","muskmelon")
// console.log(objectFruits);


let arr1=[]
arr1[4]="kiwi"
console.log(arr1);
console.log(arr1.length);
let count=0;
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i])
        {
            count++;
        }
}
console.log(`true count :${count}`);


let combinationArray=["string",1,true] //can contain different data types
console.log(combinationArray);

let arrayObject=[{name:"Rob",age:25},{name:"Molloy",age:35}]
console.log(arrayObject);