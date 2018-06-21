var regexObj = new RegExp('foo', 'gi'); 
regexObj.compile('new foo', 'g')     //This is a violation, compile() is a deprecated method.
String.doSomething = function(){}  //This is a violation, the intrinsic type String is modified.