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

//iterate through the objects
for (const key in reportingData)
{
    //console.log(`FOR IN LOOP: ${key}`);
     //console.log(reportingData[key]);
    console.log(`FOR IN LOOP : KEY ${key} & FOR IN LOOP : VALUE ${JSON.stringify(reportingData[key])}`);
}
// console.log(reportingData.passRate());
// console.log(reportingData.runDate);
// console.log(reportingData.testEnv);
// console.log(reportingData.test_config);
// console.log(reportingData.macID);
// console.log(reportingData['testID']);
// console.log(reportingData.isInScope);
// console.log(reportingData.scope);
// console.log('OBJECT',Object.values(reportingData));
// console.log(Object.keys(reportingData));
// console.log(reportingData.scope[2]);
// console.log(reportingData.previousRun.runID);
// console.log(reportingData["previousRun"]["runID"]);
// console.log(reportingData.totalTest=200);
// console.log(reportingData.totalTest);
// console.log(reportingData["previousRun"]["runID"] ="1082");
// console.log(reportingData["previousRun"]["runID"]);


// let newObj ={

// }
// newObj=reportingData;
// console.log(newObj);



// //string is immutable

// let str ="Hello";
// let reversedStr=str.toUpperCase();
// console.log(reversedStr);
// console.log(str);


// //merging the objects
// let obj1={
//     a:1,
//     b:2,
//     c:3
// }

// let obj2={
//     d:4,
//     e:5,
//     f:6
// }

// Object.assign(obj2,obj1)
// console.log(obj2);

// let obj3={
//     ...obj1,
//     ...obj2
// }
// console.log(obj3);