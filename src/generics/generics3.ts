interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

const person: PersonProtocol<string, number> = {
  name: 'Rafael',
  lastName: 'Pereira',
  age: 19,
};

console.log(person);
