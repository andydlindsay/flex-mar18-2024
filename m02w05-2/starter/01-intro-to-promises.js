// promises are JavaScript objects
// they represent a future value (futures)
// 3 states:
// pending
// fulfilled
// failed

const generatePromise = require('./generators/generate-promise');

const promise = generatePromise([1,2,3]); // returns a promise that fulfills in 1000ms

console.log(promise);

// consume a promise
// every .then, .catch returns a new promise
// .then is for happy path
// .catch is for unhappy path

// const promiseTwo = promise.then()
// const promiseThree = promiseTwo.then()

// myArr.filter().map().reduce()

promise
  .then((data) => {
    console.log('happy path', data); // [1,2,3]
    const promiseTwo = generatePromise('promise two', true);
    return promiseTwo;
  })
  .then((data) => {
    console.log('happy path', data); // ???
  })
  .then((data) => {
    console.log('happy path', data); // ???
  })
  .catch((err) => {
    console.log('something bad happened', err);
  });
