interface TipoPessoa {
  // normalmente usado em programação orientada a objetos
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Rafael', 'Pereira');
console.log(pessoa.nomeCompleto());
