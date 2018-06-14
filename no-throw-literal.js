//incorrect
throw "error";
throw 0;
throw undefined;
throw null;
var err = new Error();
throw "an " + err;
// err is recast to a string literal
var err = new Error();
throw `${err}`

//correct
throw new Error();

throw new Error("error");

var e = new Error("error");
throw e;

try {
    throw new Error("error");
} catch (e) {
    throw e;
}