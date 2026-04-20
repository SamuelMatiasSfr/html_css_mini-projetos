function criarNota(titulo, mensagem){
    const nota = document.createElement("article");
    const tituloNota = document.createElement("h2");
    const mensagemNota = document.createElement("p");

    tituloNota.textContent = titulo;
    tituloNota.classList.add("note-title");
    mensagemNota.textContent = mensagem;
    mensagemNota.classList.add("note-content");

    nota.appendChild(tituloNota);
    nota.appendChild(mensagemNota);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("note-button-delete");

    botaoExcluir.addEventListener("click", () => {
        nota.remove();
    });

    return nota;
}

function adicionarNota(nota){
    const containerNotas = document.querySelector(".notes-container");
    containerNotas.appendChild(nota);
}