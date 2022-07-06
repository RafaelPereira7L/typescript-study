export class Empresa {
  public readonly nome: string; // public não é necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Empresa('Cxxlt1337', '12.345.678/9012-34');
const colaborador1 = new Colaborador('Rafael', 'Pereira');
const colaborador2 = new Colaborador('Getulio', 'Vargas');
const colaborador3 = new Colaborador('Kendrick', 'Lamar');
empresa.addColaborador(colaborador1);
empresa.addColaborador(colaborador2);
empresa.addColaborador(colaborador3);

console.log(empresa);
empresa.showColaboradores();
