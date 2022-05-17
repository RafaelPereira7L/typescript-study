type Idade = number;
type Pessoa = {
  nome: string;
  sobrenome: string;
  idade: Idade;
  altura: number;
  peso: number;
  genero?: Genero;
};

type MascOuFem = 'Masculino' | 'Feminino';
type Another = 'Outro' | 'Outros';
type Genero = MascOuFem | Another;

const person: Pessoa = {
  nome: 'Rafael',
  sobrenome: 'Pereira',
  idade: 18,
  altura: 1.74,
  peso: 63,
};

export function setGenero(person: Pessoa, genero: Genero): Pessoa {
  return { ...person, genero };
}

console.log(setGenero(person, 'Masculino'));
