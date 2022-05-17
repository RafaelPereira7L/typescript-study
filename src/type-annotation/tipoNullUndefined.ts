let x;
if (typeof x === 'undefined') {
  x = 1337;
}
console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function square(x: any) {
  if (typeof x === 'number') {
    return x * x;
  }
  return null;
}

const squareTwo = square(2);
const squareTwoString = square('2');

if (squareTwoString === null) {
  console.log('Invalid input');
} else {
  console.log(squareTwoString * 2);
}
