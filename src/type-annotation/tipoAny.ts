// Utilizar em último  caso

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3, 'Hello world']));
console.log(showMessage({ nome: 'Rafael', idade: 18 }));
