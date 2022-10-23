// import app from "./firebase/firebase-app.js";
import { subscribeToTraveller } from "./firebase/traveller.js";

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
    subscribeToTraveller(subscription);
    console.log(subscribeToTraveller);
})

// debugger

//01:43:27 onde parei