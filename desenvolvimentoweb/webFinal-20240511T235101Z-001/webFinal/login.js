var login_form = document.getElementById("login-form");
var submit_form = document.getElementById("submit-form");

var submit_cadastro = document.getElementById("submit-cadastro")

document.addEventListener("DOMContentLoaded", function() {
    const usuarioLogado = localStorage.getItem("usuarioLogado")
    if (usuarioLogado) {
        location.replace("dashboard.html")
    }
});

submit_form.addEventListener("click", (e) => {
    e.preventDefault();
    const usuario = login_form.usuario.value;
    const senha = login_form.senha.value;

    user_json = localStorage.getItem(usuario);
    parse_json = JSON.parse(user_json);
    
    if(parse_json.usuario == usuario && parse_json.senha == senha ){
        location.replace("dashboard.html");

        localStorage.setItem("usuarioLogado", parse_json.usuario)

        location.replace("dashboard.html");

    } else {
        location.replace("./");
    }
    
});

submit_cadastro.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace("cadastro.html");
    
});