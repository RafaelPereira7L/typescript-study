export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log(`${this._nome} não pode escrever`);
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} is writing ✒️`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} is typing ⌨`);
  }
}

const escritor = new Escritor('Rafael');
const caneta = new Caneta('Caneta azul azul caneta');
const maquina = new MaquinaEscrever(
  'Maquina de escrever barulhenta igual switch blue',
);

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquina.nome);
escritor.escrever(); // Rafael não pode escrever
escritor.ferramenta = caneta; // associando caneta
escritor.escrever(); // Caneta azul azul caneta is writing ✒️
escritor.ferramenta = maquina; // associando maquina
escritor.escrever(); // Maquina de escrever barulhenta igual switch blue is typing ⌨
