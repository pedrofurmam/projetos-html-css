var logout_form = document.getElementById("logout-form");
var submit_form = document.getElementById("logout");

submit_form.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("usuarioLogado")
    window.location.href = 'index.html';

})