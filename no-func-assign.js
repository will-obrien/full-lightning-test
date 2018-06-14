//incorrect
function foo() {}
foo = bar;

function foo() {
    foo = bar;
}

foo = bar;
function foo() {}



//correct
var foo = function () {}
foo = bar;

function foo(foo) { // `foo` is shadowed.
    foo = bar;
}

function foo() {
    var foo = bar;  // `foo` is shadowed.
}