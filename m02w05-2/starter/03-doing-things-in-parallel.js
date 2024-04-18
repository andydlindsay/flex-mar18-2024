// operation one 1000ms
// operation two 1500ms
// operation three 2500ms

// series 5000ms
// parallel 2500ms

const promiseGenerator = require('./generators/generate-promise');

const promiseOne = promiseGenerator('one', false, 1000);
const promiseTwo = promiseGenerator('two', false, 1500);
const promiseThree = promiseGenerator('three', false, 2500);

const promises = [promiseOne, promiseTwo, promiseThree];

Promise.all(promises)
  .then((returnVal) => {
    console.log(returnVal);

    const resultOne = returnVal[0];
    const resultTwo = returnVal[1];
    const resultThree = returnVal[2];
  })
  .catch(() => {})