// let obj = new Promise((resolve, reject) => {
//   console.log(`Executing the promises`);
//   setTimeout(() => {
//     resolve(`Promise Resolved`);
//   }, 2000);
// })

// obj.then((solvedPromise) => {
//   console.log(solvedPromise);
// });


//reject promise

// let rejected=new Promise((resolve,reject)=>{
//     console.log(`Executing the promises`);
//     setTimeout(()=>{
//      reject('Reject the promises')
//     },2000)
// })
// rejected.then((rejectedPromise)=>{
// return rejectedPromise
// }).catch((error)=>{
//     console.log(err);
// })

//async function
let completed=new Promise((resolve,reject)=>{
    console.log('Executing the promises');
    if(1>2) //1<2 - Promise resolved
    {
        setTimeout(() => {
            resolve('Promise Resolved')
        }, 2000);
    }else{
        reject('Promise rejected')
    }
})
async function finalResults(){
   try {
    let endResults=await completed;
    console.log(endResults);
   } catch (error) {
    console.log(error);
   }
    
}
finalResults();
