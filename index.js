
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBd1kXVO9VeXqFVXxERnCUyEKHBlrwwRzA",
    authDomain: "echo-dee33.firebaseapp.com",
    projectId: "echo-dee33",
    storageBucket: "echo-dee33.firebasestorage.app",
    messagingSenderId: "318164043775",
    appId: "1:318164043775:web:4aaa785306672006f989ca"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db=getDatabase(app);

document.getElementById("btn").addEventListener('click',function(e){
    set(ref(db, 'user' + document.getElementById('username').value),{
        username:document.getElementById('username').value
        
    });
    window.alert("zecha mu bayayaaaa")
})
