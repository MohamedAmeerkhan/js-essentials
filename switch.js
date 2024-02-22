//switch case
let browser="Chrome";
switch (browser) {
  case "Chrome":
    console.log("Execute the test case in CHROME");
    break;
  case "Firefox":
    console.log("Execute the test case in FireFox");
    break;
  case "Edge":
    console.log("Execute the test case in Edge");
    break;

  default:
    console.log("Execute the test case in Electron");
    break;
}