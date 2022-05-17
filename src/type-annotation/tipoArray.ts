// Array<T> ou T[]
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, val) => acc * val, 1);
}

export function joinString(...args: string[]): string {
  return args.reduce((acc, val) => acc + ' ' + val);
}

export function joinStringUpperCase(...args: string[]): string {
  return args.map((val) => val.toUpperCase()).join(' ');
}

const result = multiplyArgs(1, 2, 3, 4, 5);
const result2 = joinString('Rafael', 'Henrique', 'Pereira');
const result3 = joinStringUpperCase('Rafael', 'Henrique', 'Pereira');

console.log(result);
console.log(result2);
console.log(result3);
