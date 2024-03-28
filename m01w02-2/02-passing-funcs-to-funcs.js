// callback -> function that you pass to another function to be called by that function
// higher order function (HOF) -> a function that accepts another function as an argument OR a function that returns a function

const runMyFunction = function(anotherFunction) {
  // console.log(anotherFunction.toString()); // console.log(sayHello)

  anotherFunction('carol'); // sayHello('carol') undefined()

  // const insideFunc = function() {};

  // return insideFunc;
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const returnVal = runMyFunction(sayHello());
// const returnVal = runMyFunction(sayHello);
