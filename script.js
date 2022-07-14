window.onload = function () {
  const bunttonLogin = document.querySelector('#button-login');
  const inputEmail = document.querySelector('input[name="email"]');
  const inputPassword = document.querySelector('input[name="password"]');

  bunttonLogin.addEventListener('click', (event) => {
    if (inputEmail.value !== 'trybe@teste.com' && inputPassword.value !== '123456') {
      event.target = window.alert('Email ou senha inválidos.');
    } else {
      event.target = window.alert('Olá, Tryber!');
    }
  });
};
