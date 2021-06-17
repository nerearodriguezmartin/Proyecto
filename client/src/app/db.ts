import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


var firebaseConfig = {
  apiKey: "AIzaSyCcRTqMzIUbscG4GNbVd1ZH5XkO0q3Zayo",
  authDomain: "plenary-atrium-302315.firebaseapp.com",
  projectId: "plenary-atrium-302315",
  storageBucket: "plenary-atrium-302315.appspot.com",
  messagingSenderId: "142149589076",
  appId: "1:142149589076:web:b40e3e118c8ab4fca435c1",
  measurementId: "G-ZDC7VC63F1"
};


// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

  // referencia al storage
export const storage = firebase.storage();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
//db.settings({ timestampsInSnapshots: true })

export const auth = firebase.auth();
// login con google
export default {
  auth: firebase.auth(),
  registroEyC(usuario: string, contraseña: string){
    firebase.auth().createUserWithEmailAndPassword(usuario, contraseña)
    .then(user => {
     console.log(user);


   })
   .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorCode, errorMessage);
     });


  },

  loginG() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
      })
  },


  loginEyC(email: string, password: string) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
  },
/*login fb*/
  loginFb() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
      })
  },


  logout() {
    firebase.auth().signOut()
    .then(function() {})
    .catch(function(error) {
      console.log(error)});
  }


}
