interface Container<T> {
  name: string;
  contents: T;
}

const stringContainer: Container<string> = {
  name: 'string container',
  contents: 'hello world',
};

const numberContainer: Container<number> = {
  name: 'number container',
  contents: 42,
}