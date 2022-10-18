import { subscribeUser } from "../../js/firebase/subscribe_user.js";

const txtName = document.getElementById('nome');
const txtEmail = document.getElementById('email');
const txtSenha = document.getElementById("password")
const txtNascimento = document.getElementById('data_nascimento');
const txtCidade = document.getElementById('cidade');

const subscribeBtn = document.getElementById("subscribe");

subscribeBtn.addEventListener("click", async() => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        senha: txtSenha.value,
        nascimento: txtNascimento.value,
        cidade: txtCidade.value,
    }
    
    const subscriptionID = await subscribeUser(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionID}`);
})