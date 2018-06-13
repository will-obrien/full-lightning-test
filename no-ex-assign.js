//incorrect
try {
  // code
} catch (e) {
  e = 10;
}



//correct
try {
  // code
} catch (e) {
  var foo = 10;
}