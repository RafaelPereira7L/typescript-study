function reverseNameAndColor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
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

@reverseNameAndColor('Val1', 'Val2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('I am the class!');
  }
}

const animal = new Animal('Zed', 'Black');
console.log(animal);
