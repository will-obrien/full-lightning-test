//incorrect
var a = someFunction();
b = 10;

//correct
var a = someFunction();
b = 10;

//incorrect with global dec
/*global b*/

b = 10;

//correct code with default typeof false
if (typeof UndefinedIdentifier === "undefined") {
  // do something ...
}


//incorrect with typeof true
if(typeof a === "string"){}


//correct with typeof true and glocal dec
/*global a*/

if(typeof a === "string"){}