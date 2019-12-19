//incorrect


function foo1(bar1) {
    bar1 = 13;
}

function foo2(bar2) {
    bar2++;
}

function foo2(bar2) {
    bar2++;
}

function foo3(bar3) {
    var baz = bar3;
}

//Examples of **correct** code for the default `{ "props": false }` option:


function foo4(bar4) {
    bar4.prop = "value";
}

function foo5(bar5) {
    delete bar5.aaa;
}

function foo6(bar6) {
    bar6.aaa++;
}

//Examples of **incorrect** code for the `{ "props": true }` option:


function foo7(bar7) {
    bar7.prop = "value";
}

function foo8(bar8) {
    delete bar8.aaa;
}

function foo9(bar9) {
    bar9.aaa++;
}

//Examples of **correct** code for the `{ "props": true }` option with `"ignorePropertyModificationsFor"` set:


function foo0(bar0) {
    bar0.prop = "value";
}

function foo11(bartt) {
    delete bartt.aaa;
}

function foo12(bar12) {
    bar12.aaa++;
}