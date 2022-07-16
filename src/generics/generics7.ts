export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function add<T>(...args: T[]): number {
  const returnValue = args.reduce((add, value) => {
    if (isNumber(add) && isNumber(value)) {
      return add + value;
    }
    return add;
  }, 0);
  return returnValue;
}

console.log(add(1, 2, 3, 4));
console.log(add(...[1, 2, 3, 'a', 'b', 'c', 4]));
