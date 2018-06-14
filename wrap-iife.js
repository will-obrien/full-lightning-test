//incorrect with outisde 
var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };})(); // wrapped function expression

//correct with outisde 
var x = (function () { return { y: 1 };}()); // wrapped call expression

//incorrect with inside 
var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };}()); // wrapped call expression

//correct with inside 
var x = (function () { return { y: 1 };})(); // wrapped function expression

//incorrect with any 
var x = function () { return { y: 1 };}(); // unwrapped

//correct with any 
var x = (function () { return { y: 1 };}()); // wrapped call expression
var x = (function () { return { y: 1 };})(); // wrapped function expression