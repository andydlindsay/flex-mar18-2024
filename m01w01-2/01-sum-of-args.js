// Write a program that takes in an unlimited number of command line arguments 
// and prints out the sum of them. If any argument is not a whole number, skip it. 
// Do not support negative numbers.

// happy path
// edge cases

// inputs
// console.log(process.argv);

const args = process.argv;

// args.shift();
// args.shift();
// args.splice(0, 2);
const slicedArr = args.slice(2);

// console.log(slicedArr);

// const numbers = ['5', '10', '15', '3.14', '-100'];

// add up the array of numbers

// set up a space in memory to hold our running total
let runningTotal = 0;

// loop through the provided array
for (const number of slicedArr) {
  // convert the current element to a number type (from a string type)
  const converted = Number(number); // Number('5')

  if (Number.isInteger(converted) && converted > 0) {
    // add the current element to our running total
    // runningTotal = runningTotal + number;
    runningTotal += converted;
  }
}

// output our running total
console.log(runningTotal);
