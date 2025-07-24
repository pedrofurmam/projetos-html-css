import { Usuario } from './modules/usuario.js';

var cadastro_form = document.getElementById("cadastro-form");
var submit_form = document.getElementById("submit-cadastro");

document.addEventListener("DOMContentLoaded", function() {
    const usuarioLogado = localStorage.getItem("usuarioLogado")
    if (usuarioLogado) {
        location.replace("dashboard.html")
    }
});

submit_form.addEventListener("click", (e) => {
    e.preventDefault();
    
    const user = new Usuario(cadastro_form.usuario.value, cadastro_form.senha.value)

    console.log(user);

    localStorage.setItem(cadastro_form.usuario.value, JSON.stringify(user));

    location.replace("index.html")

});