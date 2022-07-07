export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserir(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  quantidade(): number {
    return this.produtos.length;
  }
  total(): number {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Whey', 80);
const produto2 = new Produto('Creatina', 60);
const produto3 = new Produto('Deca', 150);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserir(produto1, produto2, produto3);
console.log(carrinhoDeCompras.total());
console.log(carrinhoDeCompras.quantidade());
