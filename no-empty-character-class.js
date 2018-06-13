//incorrect
/^abc[]/.test("abcdefg"); // false
"abcdefg".match(/^abc[]/); // null


//correct
/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]

/^abc[a-z]/.test("abcdefg"); // true
"abcdefg".match(/^abc[a-z]/); // ["abcd"]