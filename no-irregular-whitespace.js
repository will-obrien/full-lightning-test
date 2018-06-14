//incorrect with default skipstrings true

function thing() /*<NBSP>*/{
  return 'test';
}

function thing( /*<NBSP>*/){
  return 'test';
}

function thing /*<NBSP>*/(){
  return 'test';
}

function thing᠎/*<MVS>*/(){
  return 'test';
}

function thing() {
  return 'test'; /*<ENSP>*/
}

function thing() {
  return 'test'; /*<NBSP>*/
}

function thing() {
  // Description <NBSP>: some descriptive text
}

/*
Description <NBSP>: some descriptive text
*/

function thing() {
  return / <NBSP>regexp/;
}

/*eslint-env es6*/
function thing() {
  return `template <NBSP>string`;
}

//correct with default skipstrings true
function thing() {
  return ' <NBSP>thing';
}

function thing() {
  return '​<ZWSP>thing';
}

function thing() {
  return 'th <NBSP>ing';
}

//correct with skipcomments true
function thing() {
  // Description <NBSP>: some descriptive text
}

/*
Description <NBSP>: some descriptive text
*/

//correct with skipRegexp true
function thing() {
  return / <NBSP>regexp/;
}

//correct with skipTemplates true
function thing() {
  return `template <NBSP>string`;
}
