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

//correct for allowAfterSuper true
var a = super.foo_;
super._bar();

//incorrect for enforceinmethodnames true
class Foo1 {
  function _bar() {}
}

class Foo2 {
  function bar_() {}
}

const o = {
  function _bar() {}
};
