function login() {
        firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
            console.log('sucess', response)
        }).catch(error => {
            console.log('error', error)
        });
}

function register() {
    window.location.href = "/Pages/cadastro-usuario/cadastro.html"
}