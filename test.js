const add = require("./index");

if (add(10, 20) !== 30) throw Error("Test Failed");

console.log("Test Passed");