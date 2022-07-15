type Add = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const add: Add = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(add(1));
console.log(add(1, 2));
console.log(add(5, 4, 3, 2, 1));
