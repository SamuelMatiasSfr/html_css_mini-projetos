function copiarSenha() {
    const iconeCopiar = document.getElementById("icone-copiar");
    const textoSenhaGerada = document.getElementById("senha-gerada");

    iconeCopiar.addEventListener("click", () => {
        const senha = textoSenhaGerada.textContent;
        navigator.clipboard.writeText(senha);
    });
}

function atualizarTamanhoSenha() {
    const barraTamanhoSenha = document.getElementById("barra-tamanho-senha");
    const textoTamanhoSenha = document.getElementById("texto-tamanho-senha");

    barraTamanhoSenha.addEventListener("input", () => {
        let tamanho = barraTamanhoSenha.value;
        let porcentagem = (barraTamanhoSenha.value / 20) * 100;

        if (tamanho == 0) {
            porcentagem = 0;
            tamanho = 0
        } else if (tamanho > 0 && tamanho <= 5) {
            porcentagem = 25;
            tamanho = 5;
        } else if (tamanho > 5 && tamanho <= 10) {
            porcentagem = 50;
            tamanho = 10;
        } else if (tamanho > 10 && tamanho <= 15) {
            porcentagem = 75;
            tamanho = 15;
        } else if (tamanho > 15) {
            porcentagem = 100;
            tamanho = 20;
        }
        
        textoTamanhoSenha.textContent = tamanho;
        barraTamanhoSenha.value = tamanho;
        barraTamanhoSenha.style.background = `linear-gradient(to right, #6c996f ${porcentagem}%, #14131b ${porcentagem}%`;
    });
}

function atualizarNivelSeguranca(numCheckboxesMarcadas) {
    const textoNivelSeguranca = document.getElementById("texto-nivel-seguranca");

    let codigoCorBarra = "";

    if(numCheckboxesMarcadas === 1) {
        textoNivelSeguranca.textContent = "Muito Baixo";
        codigoCorBarra = "#d9534f";
    } else if (numCheckboxesMarcadas === 2) {
        textoNivelSeguranca.textContent = "Baixo";
        codigoCorBarra = "#f0ad4e";
    } else if (numCheckboxesMarcadas === 3) {
        textoNivelSeguranca.textContent = "Médio";
        codigoCorBarra = "#facb68";
    } else if (numCheckboxesMarcadas === 4) {
        textoNivelSeguranca.textContent = "Alto";
        codigoCorBarra = "#6c996f";
    }

    const barrasSeguranca = document.querySelectorAll(".barra-seguranca");
    barrasSeguranca.forEach((barra, index) => {
        if(index < numCheckboxesMarcadas) {
            barra.style.backgroundColor = codigoCorBarra;
        } else {
            barra.style.backgroundColor = "#14131b";
        }
    });
}

function gerarSenha() {
    const botaoGerarSenha = document.getElementById("gerar-senha");
    botaoGerarSenha.addEventListener("click", () => {
        //const tamanho = Number(document.getElementById("texto-tamanho-senha").textContent);

        const incluirMaiusculas = document.getElementById("incluir-maiusculas").checked;
        const incluirMinusculas = document.getElementById("incluir-minusculas").checked;
        const incluirNumeros = document.getElementById("incluir-numeros").checked;
        const incluirSimbolos = document.getElementById("incluir-simbolos").checked;

        let numCheckboxesMarcadas = 0;
        if(incluirMaiusculas) numCheckboxesMarcadas++;
        if(incluirMinusculas) numCheckboxesMarcadas++;
        if(incluirNumeros) numCheckboxesMarcadas++;
        if(incluirSimbolos) numCheckboxesMarcadas++;

        atualizarNivelSeguranca(numCheckboxesMarcadas);
    });
}

function main() {
    copiarSenha();
    atualizarTamanhoSenha();
    gerarSenha();
}

main();