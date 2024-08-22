// interface Dog {
//   id?: number;
//   breed: string;
//   name: string;
// }

import { Dog } from './index';

// axios.get()

const newDog: Dog = {} as Dog;

newDog.breed = 'whatever';

interface MyObject {
  username: string;
  age: number;
  pet: Dog;
}

const myObj: MyObject = {
  username: 'alice',
  age: 42,
  pet: {
    breed: 'labrador',
    name: 'sheriff'
  }
};

const myObjects: MyObject[] = [];

myObjects.push(myObj);
// myObjects.push({});
