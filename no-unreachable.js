//incorrect
function foo() {
  return true;
  console.log("done");
}

function bar() {
  throw new Error("Oops!");
  console.log("done");
}

while(value) {
  break;
  console.log("done");
}

throw new Error("Oops!");
console.log("done");

function baz() {
  if (Math.random() < 0.5) {
      return;
  } else {
      throw new Error();
  }
  console.log("done");
}

for (;;) {}
console.log("done");

//correct
function foo() {
  return bar();
  function bar() {
      return 1;
  }
}

function bar() {
  return x;
  var x;
}

switch (foo) {
  case 1:
      break;
      var x;
}