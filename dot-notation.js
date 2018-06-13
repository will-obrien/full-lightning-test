
//incorrect
var x = foo["bar"];

//correct
var x = foo.bar;

var x = foo[bar];    // Property name is a variable, square-bracket notation required


//correct with allowKeywords:false
var x = foo.bar;

var x = foo[bar];    // Property name is a variable, square-bracket notation required

//correct with allowPattern ^[a-z]+(_[a-z]+)+$
var data = {};
data.foo_bar = 42;

var data = {};
data["fooBar"] = 42;

var data = {};
data["foo_bar"] = 42; // no warning