// let username: string | number | boolean = 'alice';

// username = 'carol';
// username = 42;
// username = true;

// const myNum: number = 2;

// const myStr: string = '2.4';

// console.log(myNum == myStr);

const myNums: (string | number)[] = [];
const strings: string[] = ['hello'];

myNums.push(4);
myNums.push('hello');
// myNums.push([]);
const val = myNums.pop();
