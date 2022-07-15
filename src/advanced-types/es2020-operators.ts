type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const doc: Documento = {
  titulo: 'Documento',
  texto: 'Texto',
  // data: new Date(),
};

console.log(doc);
console.log(doc.data?.toDateString() ?? 'Data não definida');
console.log(undefined ?? '1 - Operador de coalescência nula');
console.log(null ?? '2 - Operador de coalescência nula');
console.log(false ?? '2 - Operador de coalescência nula');
console.log(0 ?? '2 - Operador de coalescência nula');
