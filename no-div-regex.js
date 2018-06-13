//incorrect
function bar() { return /=foo/; }

//correct
function bar() { return /\=foo/; }