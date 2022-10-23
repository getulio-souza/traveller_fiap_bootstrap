const txtNome = document.getElementById("nome");
console.log(nome);
const txtEmail= document.getElementById("email");
const txtSenha = document.getElementById("password");
const txtCidade = document.getElementById("cidade");
const nascimento = document.getElementById("data_nascimento");
const subscribeBtn = document.getElementById("subscribe");

subscribeBtn.addEventListener('click', () => {
    const subscription = {
        nome: txtNome.value,
        email: txtEmail.value,
        senha: txtSenha.value,
        cidade: txtCidade.value,
        nascimento: nascimento.value
    }
    console.log(subscription);
})

debugger