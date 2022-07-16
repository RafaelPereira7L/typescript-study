export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}
// const person1 = new Person('Rafael', 19);
// const person2 = new Person(['Rafael'], 19);
// const person3 = new Person(['Rafael'], { age: 19 });
// const person4 = new Person<string, number>('Rafael', 19);

export class Stack<T> {
  private counter = 0;
  private items: { [key: number]: T } = {};

  push(item: T): void {
    this.items[this.counter] = item;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;
    const item = this.items[this.counter];
    delete this.items[this.counter];
    return item;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  showStack(): void {
    for (const key in this.items) {
      console.log(this.items[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(3);
stack.push(3);
stack.push(7);
stack.push(3);
stack.pop();
stack.showStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
