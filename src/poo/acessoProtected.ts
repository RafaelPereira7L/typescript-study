export class Empresa {
  public readonly nome: string; // public não é necessário
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador.nome + ' ' + colaborador.sobrenome);
    }
  }
  public getNome(): string {
    return this.nome;
  }
}

export class Rafaeldev extends Empresa {
  constructor() {
    super('Rafaeldev', '123.456.789/0001-00');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) {
      return colaborador;
    }
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Rafaeldev();
const colaborador1 = new Colaborador('Rafael', 'Pereira');
const colaborador2 = new Colaborador('Kendrick', 'Lamar');
const colaborador3 = new Colaborador('Getulio', 'Vargas');
empresa.addColaborador(colaborador1);
empresa.addColaborador(colaborador2);
empresa.addColaborador(colaborador3);
const colaboradorRemovido = empresa.popColaborador();

console.log(empresa);
console.log(colaboradorRemovido);
