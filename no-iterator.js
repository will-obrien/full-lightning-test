//incorrect
Foo.prototype.__iterator__ = function() {
  return new FooIterator(this);
};

foo.__iterator__ = function () {};

foo["__iterator__"] = function () {};


//correct
var __iterator__ = foo; // Not using the `__iterator__` property.