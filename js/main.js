const name = document.getElementById('name');
const email = document.getElementById('email');
const menssage = document.getElementById('menssage');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []

    if(name.value === '' || name.value === null) {
        messages.push('<div class="alert alert-warning">Por favor, nome é obrigatório.</div>');
    }

    if(email.value === '' || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        messages.push('<div class="alert alert-warning">Por favor, digite um e-mail válido.</div>')
    }

    if(menssage.value === '') {
        messages.push('<div class="alert alert-warning">Por favor, digite a sua mensagem.</div>')
    }

    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(', ');
    } 
});

