interface User {
  username: string;
  password: string;
}

const login = (user: User): boolean => {
  return true;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  moreStuff: 'hello'
};

login(myUser);
