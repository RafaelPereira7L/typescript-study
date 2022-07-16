function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

export class Pessoa {
  name: string;
  lastName: string;
  age: number;

  constructor(
    @decorator name: string,
    @decorator lastName: string,
    @decorator age: number,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.lastName} -> ${msg}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();

    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' ');
  }
}

const person = new Pessoa('Rafael', 'Pereira', 19);
const method = person.method('Hello World');
console.log(method);
