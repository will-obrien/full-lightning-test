//incorrect
Object.prototype.a = "a";
Object.defineProperty(Array.prototype, "times", { value: 999 });

//correct for exceptions: [Object]
Object.prototype.a = "a";