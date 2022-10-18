import { loginToGulliverTraveller } from "./firebase/gulliver-traveler.js";
import { getLogins } from "./firebase/gulliver-traveler.js";
// LOGIN
const txtEmail = document.getElementById("email");
const txtSenha = document.getElementById("password");
const btnSubscribe = document.getElementById("subscribe");

localStorage.setItem("acesso", false);
btnSubscribe.addEventListener("click", async () => {
  const myItens = getLogins();
  myItens.then((doc) => doc.forEach((el) => passLogin(el.data().email, el.data().senha)));
  function passLogin(email, senha) {
    if (email === txtEmail.value && senha === txtSenha.value) {
      window.location.href = 'profile.html';
      localStorage.setItem("acesso", true);
    } else {
      alert("Login invalido")
    }
  }
  const loginId = loginToGulliverTraveller();
  console.log("loginId", loginId)
});