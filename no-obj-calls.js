//incorrect
var math = Math();
var json = JSON();
var reflect = Reflect();

//correct
function area(r) {
  return Math.PI * r * r;
}
var object = JSON.parse("{}");
var value = Reflect.get({ x: 1, y: 2 }, "x");
