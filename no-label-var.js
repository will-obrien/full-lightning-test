//incorrect
var x = foo;
function bar() {
x:
  for (;;) {
    break x;
  }
}

//correct
function foo() {
  var q = t;
}

function bar() {
q:
  for(;;) {
    break q;
  }
}
