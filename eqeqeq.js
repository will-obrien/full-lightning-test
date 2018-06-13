//incorrect
if (x == 42) { }

if ("" == text) { }

if (obj.getStuff() != undefined) { }

//incorrect with always
a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null

//correct with always
a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null

//incorrect with smart
// comparing two variables requires ===
a == b

// only one side is a literal
foo == true
bananas != 1

// comparing to undefined requires ===
value == undefined

//correct with smart
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null 