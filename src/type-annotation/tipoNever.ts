export function newError(): never {
  throw new Error('Erro');
}

newError();
