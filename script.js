window.onload = function () {

    let bunttonLogin = document.querySelector('#button-login');
    let inputEmail = document.querySelector('input[name="email"]');
    let inputPassword = document.querySelector('input[name="password"]');

    bunttonLogin.addEventListener('click', function (event) {
        if (inputEmail.value !== 'trybe@teste.com' && inputPassword.value !== '123456') {
            event.target = window.alert("Email ou senha inválidos.");
        } else {
            event.target = window.alert("Olá, Tryber!")
        }

    })
}


