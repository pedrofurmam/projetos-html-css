
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

    function addRow(id, nome, criadoEm) {
        var tabelaBody = document.getElementById("tabelaBody");
        var newRow = tabelaBody.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = id;
        cell2.innerHTML = nome;
        cell3.innerHTML = criadoEm;
        cell4.innerHTML = "<button onclick='deleteRow(this.parentNode.parentNode)'>Delete</button>";
    }

    // Function to delete a row from the table
    //function deleteRow(row) {
    //    row.parentNode.removeChild(row);
    //}

    var idaleatorio = generateidaleatorio();
    var dataatual = getCurrentDate();
    addRow(idaleatorio, nomeLista, dataatual);
});