// Espera até que o DOM esteja completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o formulário e o botão de envio do formulário pelo ID
    var form = document.getElementById("contact-form");
    var submitBtn = document.getElementById("submitBtn");

    // Adiciona um evento de submissão ao formulário
    form.addEventListener("submit", function(event) {
        // Evita o envio do formulário
        event.preventDefault();

        // Verifica se os campos estão preenchidos
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Verifica se algum campo está vazio
        if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
            // Se algum campo estiver vazio, exibe um alerta
            alert("Por favor, preencha todos os campos do formulário.");
        } else {
            // Se todos os campos estiverem preenchidos, você pode realizar a submissão do formulário aqui
            // Exemplo: form.submit();
            alert("Formulário enviado com sucesso!");
        }
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Troca de slide a cada 2 segundos (2000 milissegundos)
}