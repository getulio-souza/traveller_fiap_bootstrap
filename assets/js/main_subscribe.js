import app from "./firebase/firebase-app.js";
console.log(app)

const txtNome = document.getElementById("nome");
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
    //save on database
    subscribeToTraveller();
})

debugger