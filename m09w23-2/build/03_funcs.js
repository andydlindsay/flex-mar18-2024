"use strict";
// arguments, return value, function name
// const sayHello = (name: string, age?: number): string => {
//   return 'hello world';
//   // return undefined;
// };
// const something = sayHello('hello');
const returningPromise = () => {
    return new Promise((resolve) => {
        resolve('hello');
    });
};
const writer = {
    penName: 'agatha christie',
    writeBook: (title) => {
        return true;
    }
};
const higherOrderFunc = (callback) => { };
higherOrderFunc((num) => { return 'hello'; });
