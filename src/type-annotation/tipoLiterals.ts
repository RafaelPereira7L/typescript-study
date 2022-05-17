/* eslint-disable @typescript-eslint/no-unused-vars */
let x = 10; //eslint-disable-line
x = 1337;
const y = 10;
let a = 100 as const; //eslint-disable-line

const pessoa = {
  nome: 'Rafael' as const,
  idade: 18,
};

function escolhaCor(cor: 'Vermelho' | 'Verde' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Azul'));

//
export default 1;
