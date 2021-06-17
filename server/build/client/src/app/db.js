"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.GeoPoint = exports.Timestamp = exports.storage = exports.db = void 0;
const app_1 = __importDefault(require("firebase/app"));
require("firebase/firestore");
require("firebase/auth");
require("firebase/storage");
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
exports.db = app_1.default
    .initializeApp(firebaseConfig)
    .firestore();
// referencia al storage
exports.storage = app_1.default.storage();
// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = app_1.default.firestore;
exports.Timestamp = Timestamp;
exports.GeoPoint = GeoPoint;
// if using Firebase JS SDK < 5.8.0
//db.settings({ timestampsInSnapshots: true })
exports.auth = app_1.default.auth();
// login con google
exports.default = {
    auth: app_1.default.auth(),
    registroEyC(usuario, contraseña) {
        app_1.default.auth().createUserWithEmailAndPassword(usuario, contraseña)
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
        const provider = new app_1.default.auth.GoogleAuthProvider();
        app_1.default.auth().signInWithPopup(provider)
            .then(function (result) {
            console.log(result);
        })
            .catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
        });
    },
    loginEyC(email, password) {
        app_1.default.auth().signInWithEmailAndPassword(email, password)
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
        const provider = new app_1.default.auth.FacebookAuthProvider();
        app_1.default.auth().signInWithPopup(provider)
            .then(function (result) {
            console.log(result);
        })
            .catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
        });
    },
    logout() {
        app_1.default.auth().signOut()
            .then(function () { })
            .catch(function (error) {
            console.log(error);
        });
    }
};
