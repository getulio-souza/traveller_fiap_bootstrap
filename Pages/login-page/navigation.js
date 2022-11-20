function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value,
        form.password().value
    ).then(response => {
        hideLoading();
            alert("login realizado com sucesso!")
            window.location.href = "/index.html"
    }).catch(error => {
        hideLoading();
            alert(getErrorMessage(error));
        });
}

//creating an error message if user was incorrect 
function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado";
    }
    return error.message;
}

function register() {
    // showLoading();
    window.location.href = "/Pages/cadastro-usuario/cadastro.html"
}