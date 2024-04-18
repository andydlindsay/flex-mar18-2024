# M02W05 - Promises

### To Do
- [x] Illustrate the "callback waterfall" (callback hell) problem
- [x] Introduction to Promises
- [x] Error handling with Promises (vs callbacks)
- [x] Creating our own Promises
- [x] Parallelizing async things (Promise.all)

```js
higherOrderFunction((err, valueOne) => {
  if (err) {
    console.log(err);
  }
  anotherHigherOrderFunc((err, valueTwo) => {
    if (err) {
      console.log(err);
    }
    anotherHigherOrderFunc((err, valueThree) => {
      // do something with data
    });
  });
});
```


```js
jQuery.ajax(() => {})

const promise = jQuery.ajax()
promise.then()

const interval = setInterval(() => {
  conn.write('Move: up')
}, 100);

clearInterval(interval);
```

























