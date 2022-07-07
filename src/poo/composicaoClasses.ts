export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  turbo(): void {
    this.motor.turbo();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor ligado');
  }
  acelerar(): void {
    console.log('Motor acelerando');
  }
  turbo(): void {
    console.log('O turbo tá fazendo sututututu');
  }
  desligar(): void {
    console.log('Motor desligado');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.turbo();
carro.desligar();
