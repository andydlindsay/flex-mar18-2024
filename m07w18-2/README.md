# M07W18 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] _useEffect_ Flow
- [x] Dependencies
- [x] Data Fetching

### Pure Functions
* do not produce side effects
* given the same arguments, returns the same value

```js
const sayHello = (name) => {
  return `hello there ${name}`;
};

let additive = 12;
let index = 0;

const addTwo = (num) => {
  index = 10;
  const result = num + additive;
  return result;
};
```

### Common Side Effects
* manipulating the DOM
* setting timers/intervals (`window`)
* fetching data
* setting web sockets
* console.log

```js
useEffect(() => {}); // gets called on every render
useEffect(() => {}, [counter]); // called on initial render and then only if something in the array changes
useEffect(() => {}, []); // called on initial render and then never again
```


















