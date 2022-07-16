type Constructor = new (...args: any[]) => any;

function reverseNameAndColor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('I am the decorator! Target ->', target);
    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }
      reverse(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function anotherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log(
      'I am the another decorator! Target ->',
      target,
      'Param1 ->',
      param1,
    );
  };
}

@anotherDecorator('Param1') // 2nd
@reverseNameAndColor('Val1', 'Val2') // 1st
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('I am the class!');
  }
}

const animal = new Animal('Zed', 'Black');
console.log(animal);
