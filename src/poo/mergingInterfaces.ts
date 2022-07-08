interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: string[];
}

interface Pessoa {
  idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Rafael',
  sobrenome: 'Pereira',
  endereco: ['A', 'B', 'C'],
  idade: 19,
};

pessoa.endereco.push('D');
console.log(pessoa);
