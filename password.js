document.getElementById("button").onclick = () => {
    var password = document.getElementById("password").value
    if (password == password) {
        localStorage.setItem("password-entered", true)
        location.reload();
    }
}