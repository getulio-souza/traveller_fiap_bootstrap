function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById('recover-passwrod-button').disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

//check to know is e-email is valid
function isEmailValid() {
    const email = document.getElementById('email').value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

//validate email
function validateEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

//validate password
function isPasswordValid() {
    const password = document.getElementById('password').value;
    if (!password) {
        return false;
    }
    return true;
}

