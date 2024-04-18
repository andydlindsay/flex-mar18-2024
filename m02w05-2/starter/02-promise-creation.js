const promise = new Promise((resolve, reject) => {
  // if happy path, we call the resolve function
  // resolve(['a', 'b']); // the value given to resolve gets passed to the .then

  // if things go wrong, we call the reject function
  reject('things have gone wrong'); // tied to the .catch
});

nodeErrorFirst((err, data) => {})

promise
  .then((data) => {
    console.log(data); // ['a', 'b']
  })
  .catch((err) => {
    console.log(err); // 'things have gone wrong'
  })

console.log('end of file');
