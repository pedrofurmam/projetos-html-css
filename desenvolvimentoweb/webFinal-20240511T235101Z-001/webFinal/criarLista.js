import { Lista } from "./modules/lista.js";
import { Usuario } from "./modules/usuario.js";



function exibirLista(){
    const userLogado = localStorage.getItem("usuarioLogado")
    const userJSON = localStorage.getItem(userLogado);
    const userObj = JSON.parse(userJSON)
    console.log(userObj.listas)
    const listasUsuario = userObj.listas
    console.log(listasUsuario.length)
    
    var tabelaBody = document.getElementById("tabelaBody");
    

    for (let i = 0; i < listasUsuario.length; i++){

        var lista = listasUsuario[i]
        var newRow = tabelaBody.insertRow();
        newRow.id = "linha" + lista.id;

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = lista.id;
        cell2.innerHTML = lista.nome;
        cell3.innerHTML = lista.data;
        //cell4.innerHTML = "<button onclick='document.getElementById(\"tabelaBody\").deleteRow(this.parentNode.parentNode)'>Delete</button>";
        //cell4.innerHTML = "<button onclick=deletarLista()>Deletar</button>"
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.addEventListener('click', function() {
            deletarLista(lista.id);
        });
        cell4.appendChild(deleteButton);
    }
    
}

function deletarLista(id){
    const userLogado = localStorage.getItem("usuarioLogado");
    const userJSON = localStorage.getItem(userLogado);
    const userObj = JSON.parse(userJSON);
    let listasUsuario = userObj.listas;
    const index = listasUsuario.findIndex(lista => lista.id === id);

    if (index !== -1) {
        // Remove a lista do array
        listasUsuario.splice(index, 1);

        // Atualiza o objeto do usuário no localStorage
        localStorage.setItem(userLogado, JSON.stringify(userObj));
        location.reload();

        
    }

    
}

exibirLista();

var criar_lista = document.getElementById("criarListaAction");


criar_lista.addEventListener("click", (e) => {
    e.preventDefault();

    var nomeListaInput = document.getElementById("nomeLista");
    var nomeLista = nomeListaInput.value;

    function generateRandomId() {
        var array = new Uint8Array(16);
        crypto.getRandomValues(array);
        var hex = Array.from(array, function(byte) {
            return ('0' + byte.toString(16)).slice(-2);
        }).join('');
        return hex;
    }

    function getCurrentDate() {
        var now = new Date();
        var data = now.toLocaleDateString('pt-BR'); 
        return data;
    }

    function addRow(item) {
        var tabelaBody = document.getElementById("tabelaBody");
        var newRow = tabelaBody.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = item.id;
        cell2.innerHTML = item.nome;
        cell3.innerHTML = item.data;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.addEventListener('click', function() {
            deletarLista(lista.id);
        });
        cell4.appendChild(deleteButton);
        
    }


    var idaleatorio = generateRandomId();
    var dataatual = getCurrentDate();

    console.log(idaleatorio, dataatual)

    const listaTeste = new Lista(idaleatorio, nomeLista, dataatual);
  
    const userLogado = localStorage.getItem("usuarioLogado")
    const user = localStorage.getItem(userLogado)
    const userObj = JSON.parse(user)

    console.log(userObj)

    userObj.listas.push(listaTeste)

    localStorage.setItem(userLogado, JSON.stringify(userObj))

    addRow(listaTeste);
    location.reload();


});

