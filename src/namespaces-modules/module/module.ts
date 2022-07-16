/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  export const nameNamespace = 'Rafael';

  export class PersonNamespace {
    constructor(public name: string) {}
  }
  const personNameSpace = new PersonNamespace(nameNamespace);
  console.log(personNameSpace);

  export namespace AnotherNamespace {
    export const nameNamespace = 'Rafael';
  }
}
const personNameSpace = new MyNamespace.PersonNamespace(
  MyNamespace.nameNamespace,
);
console.log(personNameSpace);
console.log(
  'Another Namespace -> ',
  MyNamespace.AnotherNamespace.nameNamespace,
);

const constNamespace = 'Namespace const value';
