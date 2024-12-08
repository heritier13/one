function fn1(){
    var n=document.getElementById("username").value
    var z=document.getElementById("password").value
    console.log(n + z)
    localStorage.setItem("name" +n,n)
    localStorage.setItem("pass" +n ,z)
}
console.log(localStorage)