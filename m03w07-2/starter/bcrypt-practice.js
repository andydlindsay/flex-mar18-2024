const bcrypt = require('bcryptjs');

// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt);
// })

// bcrypt.genSalt(10)
//   .then((salt) => {
//     console.log('salt', salt);
//   });

const salt = bcrypt.genSaltSync();
console.log('salt', salt);

const password = '1234';

const hash = bcrypt.hashSync(password, salt);
console.log('hash', hash);

// const hashedPassword = '$2a$10$iYUmbINKUYM1O1i0tpout.Om8d4iCpE73iuhjSydpAbCfFjnwTe8S';

// const result = bcrypt.compareSync('1234', hashedPassword);
// console.log('result', result);
