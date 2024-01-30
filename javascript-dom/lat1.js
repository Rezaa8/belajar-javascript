function login() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if (username === "" || password === "") {
        alert("Username atau pass tidak valid");
        return;
    }

    if (username === "admin" && password === "123") {
        alert("Selamat datang admin😎");
        window.location.href = "log.html"; 
    } else {
        alert("Username atau password salah");
    }
}
