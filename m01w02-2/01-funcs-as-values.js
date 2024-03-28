// hoisted

// function declaration
// function myFunc() {
//   console.log('did this work?');
// }

// function expression
let myFunc = function() {
  console.log('did this one work???');
};

const funcs = [];

funcs.push(myFunc);
funcs.push(console.log);
console.log(funcs);

// myFunc() // gives back the return value
// myFunc // gives back the function itself

const a = funcs[0];
a();

funcs[1]('hello world'); // console.log('hello world')


// add key/value pairs to our function object

// myFunc.newKey = 'value';
// myFunc['anotherKey'] = 'yet another value';

// console.log(myFunc.newKey);

// console.log(console.log(myFunc()));
