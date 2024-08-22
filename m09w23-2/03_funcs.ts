// arguments, return value, function name

// const sayHello = (name: string, age?: number): string => {
//   return 'hello world';
//   // return undefined;
// };

// const something = sayHello('hello');

const returningPromise = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve('hello');
  });
};

// returningPromise()
//   .then((data) => {});

interface Writer {
  penName: string;
  writeBook: (title: string) => boolean;
}

const writer: Writer = {
  penName: 'agatha christie',
  writeBook: (title) => {
    return true;
  }
};

const higherOrderFunc = (callback: (err: {}, num: number) => string) => {};

higherOrderFunc((num) => { return 'hello' })
