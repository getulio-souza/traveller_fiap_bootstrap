function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert('E-mail enviado com sucesso');
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    })
}