//incorrect
if (foo == null) {
  bar();
}

while (qux != null) {
  baz();
}

//correct

if (foo === null) {
  bar();
}

while (qux !== null) {
  baz();
}