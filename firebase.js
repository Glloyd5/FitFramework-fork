// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* Authentication */
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const registerForm = document.querySelector('.register');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJc8yzzj8kFFGXQtZAS_WA7lu7v6dqF5s",
  authDomain: "fitframework-4e94c.firebaseapp.com",
  projectId: "fitframework-4e94c",
  storageBucket: "fitframework-4e94c.firebasestorage.app",
  messagingSenderId: "29347442006",
  appId: "1:29347442006:web:41af7eda0ff675e873faf7",
  measurementId: "G-55MG4BEC8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();




// register form event listener where we will call the create user function
registerForm.addEventListener('submit', (e) => {
    e.preventDefault;

    const email = registerForm.email.value;
    const password = registerForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('user created:', cred.user)
      registerForm.reset();
    })
    .catch((err) => {
      console.log(err.message)
    })
})