import isEmail from 'validator/lib/isEmail';

const show_Error_Messages = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideErrorMessages(this);
  checkEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPwds(password, password2);
  if (shouldSendForm(this)) {
    alert('Formulário enviado com sucesso!');
  }
});

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) {
    showErrorMessage(input, 'Este email está inválido!');
  }
}

function checkPwds(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'As senhas não conferem!');
    showErrorMessage(password2, 'As senhas não conferem!');
  }
}

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'Preencha este campo!');
    } else if (input.value.length < 3) {
      showErrorMessage(input, 'Preencha este campo corretamente!');
    }
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + show_Error_Messages)
    .forEach((item) => item.classList.remove(show_Error_Messages));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(show_Error_Messages);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + show_Error_Messages)
    .forEach(() => (send = false));
  return send;
}
