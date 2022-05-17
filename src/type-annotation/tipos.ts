/* eslint-disable */
// Tipos básicos
let nome: string = 'Rafael';
let idade: number = 18;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let numberArray: Array<number> = [1, 2, 3, 4, 5];
let stringArray: Array<string> = ['a', 'b', 'c'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Rafael',
  idade: 18
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
