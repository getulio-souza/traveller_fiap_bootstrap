import { subscribeToTraveller } from "./firebase/traveller.js";

const txtNome = document.getElementById("nome");
const txtEmail= document.getElementById("email");
const txtSenha = document.getElementById("password");
const txtCidade = document.getElementById("cidade");
const nascimento = document.getElementById("data_nascimento");
const subscribeBtn = document.getElementById("subscribe");

subscribeBtn.addEventListener('click', async () => {
    const subscription = {
        nome: txtNome.value,
        email: txtEmail.value,
        senha: txtSenha.value,
        cidade: txtCidade.value,
        nascimento: nascimento.value
    }
    //save on database
    const subscriptionId = await subscribeToTraveller(subscription);
    alert("usuário inscrito com sucesso!")
})