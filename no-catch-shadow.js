//incorrect
var err = "x";

try {
    throw "problem";
} catch (err) {

}

function err() {
    // ...
};

try {
    throw "problem";
} catch (err) {

}



//correct
var err = "x";

try {
    throw "problem";
} catch (e) {

}

function err() {
    // ...
};

try {
    throw "problem";
} catch (e) {

}