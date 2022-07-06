export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Algo antes do método');
    return super.getNomeCompleto();
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Rafael', 'Pereira', 19, '123.456.789-00');
console.log(pessoa.getNomeCompleto());

const aluno = new Aluno('Rafael', 'Pereira', 19, '123.456.789-00', '701');
console.log(aluno.getNomeCompleto());

const cliente = new Cliente('Rafael', 'Pereira', 19, '123.456.789-00');
console.log(cliente.getNomeCompleto());
