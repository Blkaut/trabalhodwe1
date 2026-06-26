const form = document.querySelector("#contato");
form.addEventListener("submit", function (e){
    e.preventDefault();
    if (form.checkValidity()) { alert("Formulário enviado com sucesso!"); }
    else { alert("Erro ao enviar o formulário!"); }
});
