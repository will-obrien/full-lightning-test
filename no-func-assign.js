//incorrect
function foo() {}
foo = bar;

function foo1() {
    foo1 = bar;
}

foo2 = bar;
function foo2() {}



//correct
var foo3 = function () {}
foo3 = bar;

function foo4foo4) { // `foo` is shadowed.
    foo4 = bar;
}

function foo5() {
    var foo5 = bar;  // `foo` is shadowed.
}