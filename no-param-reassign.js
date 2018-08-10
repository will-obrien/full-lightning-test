//incorrect
/*eslint no-param-reassign: "error"*/

function foo(bar) {
    bar = 13;
}

function foo(bar) {
    bar++;
}

//correct
/*eslint no-param-reassign: "error"*/

function foo(bar) {
    var baz = bar;
}

//Examples of **correct** code for the default `{ "props": false }` option:
/*eslint no-param-reassign: ["error", { "props": false }]*/

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
}

function foo(bar) {
    bar.aaa++;
}

//Examples of **incorrect** code for the `{ "props": true }` option:
/*eslint no-param-reassign: ["error", { "props": true }]*/

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
}

function foo(bar) {
    bar.aaa++;
}

//Examples of **correct** code for the `{ "props": true }` option with `"ignorePropertyModificationsFor"` set:
/*eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["bar"] }]*/

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
}

function foo(bar) {
    bar.aaa++;
}
