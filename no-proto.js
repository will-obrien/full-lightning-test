//incorrect
var a = obj.__proto__;
var a = obj["__proto__"];

//correct
var a = Object.getPrototypeOf(obj);