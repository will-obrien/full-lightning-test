//incorrect
if (false) {
  doSomethingUnfinished();
}

if (void x) {
  doSomethingUnfinished();
}

for (;-2;) {
  doSomethingForever();
}

while (typeof x) {
  doSomethingForever();
}

do {
  doSomethingForever();
} while (x = -1);

var result = 0 ? a : b;


//correct
if (x === 0) {
  doSomething();
}

for (;;) {
  doSomethingForever();
}

while (typeof x === "undefined") {
  doSomething();
}

do {
  doSomething();
} while (x);

var result = x !== 0 ? a : b;


//correct when checkLoops is false 
while (true) {
  doSomething();
  if (condition()) {
      break;
  }
};

for (;true;) {
  doSomething();
  if (condition()) {
      break;
  }
};

do {
  doSomething();
  if (condition()) {
      break;
  }
} while (true)