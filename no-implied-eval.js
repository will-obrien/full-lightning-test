//incorrect
/*eslint no-implied-eval: "error"*/

setTimeout("alert('Hi!');", 100);

setInterval("alert('Hi!');", 100);

execScript("alert('Hi!')");

window.setTimeout("count = 5", 10);

window.setInterval("foo = bar", 10);

//correct
setTimeout(function() {
  alert("Hi!");
}, 100);

setInterval(function() {
  alert("Hi!");
}, 100);