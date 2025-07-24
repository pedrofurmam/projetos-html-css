var cadastro_form = document.getElementById("cadastro-form");
var submit_form = document.getElementById("submit-cadastro");

class Usuario {
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
    }
}

submit_form.addEventListener("click", (e) => {
    e.preventDefault();
    
    user = new Usuario(cadastro_form.usuario.value, cadastro_form.senha.value)
    //var usuario = cadastro_form.usuario.value;
   //var senha = cadastro_form.senha.value;

    console.log(user);


    localStorage.setItem(cadastro_form.usuario.value, JSON.stringify(user));
    // Armazena apenas o nome de usuário separadamente
    
});
