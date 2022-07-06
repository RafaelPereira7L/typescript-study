export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(cpf: string) {
    console.log('Setando o CPF');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('Buscando o CPF');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Rafael', 'Pereira', 19, '123.456.789-00');
pessoa.cpf = '123.456.789-77';
console.log(pessoa.cpf);
