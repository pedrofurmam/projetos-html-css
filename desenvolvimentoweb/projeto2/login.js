var login_form = document.getElementById("login-form");
var submit_form = document.getElementById("submit-form");


submit_form.addEventListener("click", (e) => {
    e.preventDefault();
    const usuario = login_form.usuario.value;
    const senha = login_form.senha.value;

    user_json = localStorage.getItem(usuario);
    parse_json = JSON.parse(user_json);
    
    if(parse_json.usuario == usuario && parse_json.senha == senha ){
        location.replace("dashboard.html");
    } else {
        location.replace("./");
    }
    
});
