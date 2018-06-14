//incorrect
var x = function () {
  foo();
}.bind(bar);

var x = (() => {
  foo();
}).bind(bar);

var x = (() => {
  this.foo();
}).bind(bar);

var x = function () {
  (function () {
    this.foo();
  }());
}.bind(bar);

var x = function () {
  function foo() {
    this.bar();
  }
}.bind(baz);


//correct
var x = function () {
  this.foo();
}.bind(bar);

var x = function (a) {
  return a + 1;
}.bind(foo, bar);