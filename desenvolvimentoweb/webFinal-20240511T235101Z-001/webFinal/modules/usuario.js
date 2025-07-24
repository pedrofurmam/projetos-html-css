export class Usuario {
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
        this.listas = [];
    }

    addLista(lista) {
        this.listas.push(lista);
    }
}