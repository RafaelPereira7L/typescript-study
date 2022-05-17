function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Pereira',

  showName(): void {
    console.log('Show name: ' + this.nome + ' ' + this.sobrenome);
  },
};

noReturn('Rafael', 'Pereira');
pessoa.showName();

export { pessoa };
