 const firebaseConfig = {
    apiKey: "AIzaSyBxZOrfIYjQ0iLaEZkQh6brUVvuuprkvWQ",
    authDomain: "authentication-gulliver.firebaseapp.com",
    projectId: "authentication-gulliver",
    storageBucket: "authentication-gulliver.appspot.com",
    messagingSenderId: "45448383265",
    appId: "1:45448383265:web:8553e4691e29d13b3ecc60"
};
firebase.initializeApp(firebaseConfig);
  console.log('antes')
firebase.auth().signInWithEmailAndPassword("usuarioteste@gmail.com", "123456").then(response => {
    console.log('sucess', response)
}).catch(error => {
    console.log('error', error)
});
console.log('depois')