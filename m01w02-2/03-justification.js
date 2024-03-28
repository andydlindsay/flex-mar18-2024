// single responsibility principle (SRP) -> our code (functions) should be responsible for only one thing

const loopThroughArray = (arr, callback) => {
  for (const element of arr) {
    // console.log(element);
    callback(element); // doOnEachLoop('bob')
  }

  return 42;
};

const doOnEachLoop = function(name) {
  console.log(`hello there ${name}`);
};

const names = ['alice', 'bob', 'carol'];

loopThroughArray(names, doOnEachLoop);

const numbers = [42, 32, 21];

const numbersOnEachLoop = function(num) {
  console.log(num * 2);
};

// loopThroughArray(numbers, numbersOnEachLoop);

numbers.forEach(numbersOnEachLoop);
