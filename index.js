

  import{ initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBd1kXVO9VeXqFVXxERnCUyEKHBlrwwRzA",
    authDomain: "echo-dee33.firebaseapp.com",
    projectId: "echo-dee33",
    storageBucket: "echo-dee33.firebasestorage.app",
    messagingSenderId: "318164043775",
    appId: "1:318164043775:web:4aaa785306672006f989ca"
  };

const name=document.getElementById('usenamame').value
const name=document.getElementById('password').value


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function fn1(name){
  firebase.database().ref('user/'+userId).set({
    username:name,
    email:email
  })
  
}
writeUserData('1' ,'zecha')
