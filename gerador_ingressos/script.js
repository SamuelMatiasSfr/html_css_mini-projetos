function gerarCodigo(){
    const codigo = Math.random().toString(36).substring(2, 8).toUpperCase();
    return codigo;
}

function gerarIngresso(foto, nome, github){
    const ticketFoto = document.getElementById('ticket-user-photo');
    const ticketName = document.getElementById('ticket-user-name');
    const ticketGithub = document.getElementById('ticket-github-username');
    
    ticketFoto.src = URL.createObjectURL(foto);
    ticketName.textContent = nome;
    ticketGithub.textContent = github;

    const ticketCode = document.getElementById('ticket-code');
    ticketCode.textContent = "#" + gerarCodigo();
}

function tornarSectionTicketVisivel(nome, email) {
    const ticketSectionTitle = document.getElementById('section-ticket-title');
    const ticketSectionText = document.getElementById('section-ticket-text');

    ticketSectionTitle.textContent = "Parabéns " + nome + "! Seu ingresso está pronto.";
    ticketSectionText.innerHTML = "Vamos enviar o seu ingresso para o email <strong>" + email + "</strong>. Enviaremos atualizações conforme a data do evento se aproxima.";

    const ticket = document.getElementById('section-ticket');
    ticket.style.display = 'flex';
}

function processarFormulario(){
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const inputFoto = document.getElementById('foto');
        const inputNome = document.getElementById('nome');
        const inputEmail = document.getElementById('email');
        const inputGithub = document.getElementById('username-github'); 

        if(
            inputFoto.value &&
            inputNome.value.trim() &&
            inputEmail.value.trim() &&
            inputGithub.value.trim()
        ) {
            gerarIngresso(inputFoto.files[0], inputNome.value, inputGithub.value);
            tornarSectionTicketVisivel(inputNome.value, inputEmail.value);
        }

        inputFoto.value = '';
        inputNome.value = '';
        inputEmail.value = '';
        inputGithub.value = '';
    });
}

function main(){
    processarFormulario();
}

main();