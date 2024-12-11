function fn1(){
    var n=document.getElementById("username").value
    var z=document.getElementById("password").value
    console.log(n + z)
    localStorage.setItem("name" +n,n)
    localStorage.setItem("pass" +n ,z)
}
console.log(localStorage)
/ Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrF1eJvumMVfNRnd-XuAoxCk4ibJ6xCQg",
  authDomain: "top-follow-8879f.firebaseapp.com",
  projectId: "top-follow-8879f",
  storageBucket: "top-follow-8879f.firebasestorage.app",
  messagingSenderId: "809310017000",
  appId: "1:809310017000:web:d2d43e5f2226c1363a405d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
