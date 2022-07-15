type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Mercedes',
  year: 2012,
  name: 'C63 AMG',
};

console.log(carro);
