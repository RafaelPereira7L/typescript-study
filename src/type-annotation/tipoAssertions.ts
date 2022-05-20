// RECOMENDADOS

const body = document.querySelector('body'); // Condicional
if (body) body.style.background = 'red';

const body3 = document.querySelector('body') as HTMLBodyElement; // Type assertion
body3.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement; // HTMLElement
input.value = 'Hello World';

// NÃO RECOMENDADOS
const body2 = document.querySelector('body')!; // Non-null assertion (!)
body2.style.background = 'red';

const body4 = document.querySelector('body') as unknown as number; // Type assertion
