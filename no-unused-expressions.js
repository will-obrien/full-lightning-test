//incorrect for default "allowShortCircuit": false, "allowTernary": false
0

if(0) 0

{0}

f(0), {}

a && b()

a, b()

c = a, b;

a() && function namedFunctionInExpressionContext () {f();}

(function anIncompleteIIFE () {});

injectGlobal`body{ color: red; }`

// correct for default "allowShortCircuit": false, "allowTernary": false
{} // In this context, this is a block statement, not an object literal

{myLabel: someVar} // In this context, this is a block statement with a label and expression, not an object literal

function namedFunctionDeclaration () {}

(function aGenuineIIFE () {}())

f();

a = 0;

new C;

delete a.b;

void a;

//incorrect allowShortCircuit": true
a || b;

//correct allowShortCircuit": true
a && b();
a() || (b = c);

//incorrect  "allowTernary": true 
a ? b : 0;
a ? b : c();

//correct "allowTernary": true 
a ? b() : c();
a ? (b = c) : d();



//correct "allowShortCircuit": true, "allowTernary": true
a ? b() || (c = d) : e();

//incorrect allowTaggedTemplates": true
`some untagged template string`;

//correct allowTaggedTemplates": true
tag`some tagged template string`;