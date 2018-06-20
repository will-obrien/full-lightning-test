//incorrect
typeof foo === "strnig";
typeof foo == "undefimed";
typeof bar != "nunber";
typeof bar !== "funsction";

//correct
typeof foo === "string";
typeof bar == "undefined";
typeof foo === baz;
typeof bar === typeof qux;

//incorrect with "requireStringLiterals": true
typeof foo === undefined;
typeof bar == Object;
typeof baz === "strnig";
typeof qux === "some invalid type";
typeof baz === anotherVariable;
typeof foo == 5;

//correct with "requireStringLiterals": true
typeof foo === "undefined";
typeof bar == "object";
typeof baz === "string";
typeof bar === typeof qux;
