export class Lista {
    constructor(id, nome, data) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.itens = []
    }
    adicionarItem(item) {
        this.itens.push(item);
    }
}