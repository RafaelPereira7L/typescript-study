export class Calculadora {
  constructor(public num: number) {}

  add(n: number): this {
    this.num += n;
    return this;
  }

  sub(n: number): this {
    this.num -= n;
    return this;
  }

  div(n: number): this {
    this.num /= n;
    return this;
  }

  mult(n: number): this {
    this.num *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.num **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(5);
calculadora.add(4).div(3).mult(6).sub(2).div(4).pow(2);
console.log(calculadora);

// builder
export class Request {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`${this.method} -> ${this.url}`);
  }
}

const request = new Request();
request.setUrl('https://rafael-dev.tech').setMethod('get').send();
