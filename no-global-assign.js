//incorrect
Object = null
undefined = 1

/*eslint no-global-assign: "error"*/
/*eslint-env browser*/
window = {}
length = 1
top = 1

/*eslint no-global-assign: "error"*/
/*globals a:false*/
a = 1


//correct
a = 1
var b = 1
b = 2

/*eslint no-global-assign: "error"*/
/*eslint-env browser*/
onload = function() {}

/*eslint no-global-assign: "error"*/
/*globals a:true*/
a = 1