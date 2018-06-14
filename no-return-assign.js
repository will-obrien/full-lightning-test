//incorrect for default except-parens
function doSomething() {
  return foo = bar + 2;
}

function doSomething() {
  return foo += 2;
}

//correct for default
function doSomething() {
  return foo == bar + 2;
}

function doSomething() {
  return foo === bar + 2;
}

function doSomething() {
  return (foo = bar + 2);
}


//incorrect code for always
function doSomething() {
  return foo = bar + 2;
}

function doSomething() {
  return foo += 2;
}

function doSomething() {
  return (foo = bar + 2);
}

//correct code for always 

function doSomething() {
  return foo == bar + 2;
}

function doSomething() {
  return foo === bar + 2;
}