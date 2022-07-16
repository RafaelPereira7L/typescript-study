type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
  color: 'Black',
  vacs: ['Vac1', 'Vac2'],
  age: 2,
};

const vacs = getKey(animal, 'vacs');
const color = getKey(animal, 'color');

console.log(vacs, color, getKey(animal, 'age'));
