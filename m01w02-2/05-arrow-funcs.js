// advantages of arrow functions (over function-keyword functions)
// 1. no more function keyword! yay!
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow functions DO NOT create `this`

// implicit => we don't ask for it to happen
// explicit => we ask for it to happen

const sayHello1 = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = (name, age) => 'hello world';
const sayHello3 = (name, age) => { return [] };

const returnVal = sayHello2('carol');
console.log('returnVal', returnVal);

// if (1 == 1) console.log('they match');
// if (err) throw err;
