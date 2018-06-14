//incorrect
var items = [,];
var colors = [ "red",, "blue" ];

//correct
var items = [];
var items = new Array(23);

// trailing comma (after the last element) is not a problem
var colors = [ "red", "blue", ];