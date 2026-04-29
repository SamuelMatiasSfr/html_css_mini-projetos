function gerarCodigo(){
    const codigo = Math.random().toString(36).substring(2, 8).toUpperCase();
    return codigo;
}

function gerarIngresso(nome, email, github){
    const ticketSectionTitle = document.getElementById('ticket-section-title');
    const ticketSectionText = document.getElementById('ticket-section-text');
    const ticketName = document.getElementById('ticket-name');
    const ticketGithub = document.getElementById('github-username');

    ticketSectionTitle.textContent = "Parabéns " + nome + "! Seu ingresso está pronto.";
    ticketSectionText.innerHTML = "Vamos enviar o seu ingresso para o email <strong>" + email + "</strong>. Enviaremos atualizações conforme a data do evento se aproxima.";
    ticketName.textContent = nome;
    ticketGithub.textContent = github;

    const ticketCode = document.getElementById('ticket-code');
    ticketCode.textContent = "#" + gerarCodigo();

    const ticket = document.getElementById('ticket-section');
    ticket.style.display = 'block';
}

function processaFormulario(){
    const botaoForm = document.getElementById('button-submit');

    botaoForm.addEventListener('click', function(event){
        event.preventDefault();

        const inputNome = document.getElementById('nome');
        const inputEmail = document.getElementById('email');
        const inputGithub = document.getElementById('github');

        gerarIngresso(inputNome.value, inputEmail.value, inputGithub.value);
    });
}

function main(){
    processaFormulario();
}

main();