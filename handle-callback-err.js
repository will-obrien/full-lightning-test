//incorrect code with default err
function loadData (err, data) {
  doSomething();
}

//correct code with default err
function loadData (err, data) {
  if (err) {
      console.log(err.stack);
  }
  doSomething();
}

function generateError (err) {
  if (err) {}
}

//correct code with error
function loadData (error, data) {
  if (error) {
     console.log(error.stack);
  }
  doSomething();
}


//correct with reg ex ^coolErr+
function loadData (coolErr, data) {
  if (coolErr) {
     doStuff();
  }
  doSomething();
}