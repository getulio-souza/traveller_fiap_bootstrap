function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.email().value,
        form.password().value
    ).then(response => {
            alert("login realizado com sucesso!")
            window.location.href = "/index.html"
        }).catch(error => {
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
    window.location.href = "/Pages/cadastro-usuario/cadastro.html"
}