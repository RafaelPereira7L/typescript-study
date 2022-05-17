const objetoA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
} = {
  keyA: 'valueA',
  keyB: 'valueB',
};

objetoA.keyB = 'another valueB';
objetoA.keyC = 'valueC';

console.log(objetoA);
