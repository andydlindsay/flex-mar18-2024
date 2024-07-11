// const arr = [1,2,3];
// const another = [4,5,6];

// // const copy = JSON.parse(JSON.stringify(arr));
// // const copy = arr.filter(() => true);
// // const copy = arr.map((element) => element);

// const sliced = another.slice(1);

// const copy = [ ...arr, ...sliced  ];

// // copy.push(4);

// console.log(arr);
// console.log(copy);

const user = {
  username: 'alice',
  age: 42,
  faveFoods: ['nachos'],
};

const copy = {
  ...user,
  username: 'bob',
  faveFoods: [
    ...user.faveFoods,
    'pizza',
  ]
};

copy.faveFoods.push('pizza');

// copy.username = 'bob';

console.log(user);
console.log(copy);
