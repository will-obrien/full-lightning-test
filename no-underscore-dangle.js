//incorrect

var foo_;
var __proto__ = {};
foo._bar();

//correct
var _ = require('underscore');
var obj = _.contains(items, item);
obj.__proto__ = {};
var file = __filename;

//correct for allowAfterThis true
var a = this.foo_;
this._bar();


//incorrect for enforceinmethodnames true
class Foo1 {
  _bar() {}
}

class Foo2 {
  bar_() {}
}

const o = {
  _bar() {}
};
