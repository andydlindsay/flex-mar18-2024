// const age = 42;
// console.log(age);
// // const older = age + 1;

const tax = 1.07;

// console.log('alice'); // anonymous

// const username = 'bob'; // 'username'
// console.log(username);

const runMyFunction = function(anotherFunction) {
  anotherFunction('carol');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

sayHello('dean');

runMyFunction(sayHello);

runMyFunction(function(num) {
  console.log(num * 2);
});

runMyFunction(num => console.log(num * 2));

// naming things is hard

const username = 'alice';
console.log(username);

console.log('alice');
