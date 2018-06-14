//incorrect
var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);
var stringObject = new String;
var numberObject = new Number;
var booleanObject = new Boolean;

//correct
var text = String(someValue);
var num = Number(someValue);
var object = new MyString();