// let obj1={
//     a:10,
//     b:20,
//     c:30
// }
// for (const key in obj1) {
//    console.log(key); //key
//    console.log(obj1[key]); //value
// }

// //using object literal
// let obj1={
//     name:"Rob",
//     age:25,
//     city:'India'
// }
// console.log(`User Name:`,obj1.name);
// console.log(typeof obj1);
// for(key in obj1)  //iterate through the object
// {
//     console.log(obj1);
// }


// //using constructor function
// function Person(name,age,location){
//     this.name=name;
//     this.age=age;
//     this.location=location;
//     return `the name is ${this.name} and age is ${this.age} and he is from ${location}`
    
// }
// let obj=new Person('Rob',25,'India')
// console.log(obj);
// console.log(obj.name);
// console.log(typeof obj);

//object created method

// let obj2=Object.create(obj1)
// console.log(obj2);
// console.log(Object.getPrototypeOf(obj1));


let reportData={
    testID:1,
    testRuntime:'100ms',
    "PASS/FAIL FLAG" : 'PASS',
    totalTest:100,
    totalPassed:80,
    isInScope:true,
    passRate: function (){  // passRate () {} - will also work
      let finalResults= (this.totalPassed/this.totalTest)*100;
      return finalResults;
    }
}
console.log(reportData.passRate());
// console.log(reportData);
// console.log(reportData["PASS/FAIL FLAG"]);
// console.log(reportData.totalPassed);
// console.log(typeof reportData.isInScope);

//Dynamic values and Dynamic Key
let runnerEnv="Local"
let machineID="BLRGV123"
let envfile="test_config"


let reportingData={
    testID:1,
    testRuntime:'100ms',
    "PASS/FAIL FLAG" : 'PASS',
    totalTest:100,
    totalPassed:80,
    isInScope:true,
    passRate: function (){  // passRate () {} - will also work
      let finalResults= (this.totalPassed/this.totalTest)*100;
      return finalResults;
    },
    runDate:new Date().toDateString(),
    testEnv:runnerEnv,
    macID:machineID ? machineID : 'unknown',
    [envfile]:{
        env: "test",
        URL :"tets.com"
    },
    scope:["test",'e2e'],
    previousRun: {
        status: "pass",
        runID:'4566'
    }
}
console.log(reportingData.passRate());
console.log(reportingData.runDate);
console.log(reportingData.testEnv);
console.log(reportingData.test_config);
console.log(reportingData.macID);
console.log(reportingData['testID']);
console.log(reportingData.isInScope);
console.log(reportingData.scope);
console.log(Object.values(reportingData));
console.log(Object.keys(reportingData));
console.log(reportingData.scope[2]);
console.log(reportingData.previousRun.runID);
console.log(reportingData["previousRun"]["runID"]);
