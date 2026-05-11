function copiarSenha() {
    const iconeCopiar = document.getElementById("icone-copiar");
    const textoSenha = document.getElementById("texto-senha");

    iconeCopiar.addEventListener("click", () => {
        const senha = textoSenha.textContent;
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
            tamanho = 0;
            porcentagem = 0;
        } else if (tamanho > 0 && tamanho <= 5) {
            tamanho = 5;
            porcentagem = 25;
        } else if (tamanho > 5 && tamanho <= 10) {
            tamanho = 10;
            porcentagem = 50;
        } else if (tamanho > 10 && tamanho <= 15) {
            tamanho = 15;
            porcentagem = 75;
        } else if (tamanho > 15) {
            tamanho = 20;
            porcentagem = 100;
        }
        
        textoTamanhoSenha.textContent = tamanho;
        barraTamanhoSenha.value = tamanho;
        barraTamanhoSenha.style.background = `linear-gradient(to right, #6c996f ${porcentagem}%, #14131b ${porcentagem}%`;
    });
}

function calcularPontosSeguranca(tamanho, quantidadeInclusoes) {
    let pontos = 0;

    if(tamanho === 5) pontos += 1;
    if(tamanho === 10) pontos += 2;
    if(tamanho === 15) pontos += 3;
    if(tamanho === 20) pontos += 4;

    if(quantidadeInclusoes === 1) pontos += 1;
    if(quantidadeInclusoes === 2) pontos += 2;
    if(quantidadeInclusoes === 3) pontos += 3;
    if(quantidadeInclusoes === 4) pontos += 4;

    return pontos;
}

function pintarBarrasSeguranca(quantidadeBarras, codigoCorBarra) {
    const barrasSeguranca = document.querySelectorAll(".nivel-seguranca-barra");
    barrasSeguranca.forEach((barra, index) => {
        if(index < quantidadeBarras) {
            barra.style.backgroundColor = codigoCorBarra;
        } else {
            barra.style.backgroundColor = "#14131b";
        }
    });
}

function atualizarNivelSeguranca(tamanho, quantidadeInclusoes) {
    const pontos = calcularPontosSeguranca(tamanho, quantidadeInclusoes);
    
    const textoNivelSeguranca = document.getElementById("texto-nivel-seguranca");
    let quantidadeBarras = 0;
    let codigoCorBarra = "";

    if(pontos >= 0 && pontos <= 2) {
        textoNivelSeguranca.textContent = "Muito Baixo";
        quantidadeBarras = 1;
        codigoCorBarra = "#d9534f";
    } else if (pontos >= 3 && pontos <= 4) {
        textoNivelSeguranca.textContent = "Baixo";
        quantidadeBarras = 2;
        codigoCorBarra = "#f0ad4e";
    } else if (pontos >= 5 && pontos <= 6) {
        textoNivelSeguranca.textContent = "Médio";
        quantidadeBarras = 3;
        codigoCorBarra = "#facb68";
    } else if (pontos >= 7 && pontos <= 8) {
        textoNivelSeguranca.textContent = "Alto";
        quantidadeBarras = 4;
        codigoCorBarra = "#6c996f";
    }

    pintarBarrasSeguranca(quantidadeBarras, codigoCorBarra);
}

function embaralharSenha(senha) {
    for(let j=0; j<10; j++) {
        for(let i = senha.length-1; i >= 0; i--) {
            const indiceNovo = Math.floor(Math.random() * senha.length);
            const auxiliar = senha[indiceNovo];
            senha[indiceNovo] = senha[i];
            senha[i] = auxiliar;
        }
    }
}

function gerarSenha(tamanho, quantidadeInclusoes, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
    const proporcaoTipoCaractere = 1 / quantidadeInclusoes;
    const quantidadeCaracteres = Math.round(tamanho * proporcaoTipoCaractere);

    const caracteres = {
        maiusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        minusculas: "abcdefghijklmnopqrstuvwxyz",
        numeros: "0123456789",
        simbolos: "!@#$%^&*()_+~`|}{[]:;?><,./-="
    };

    const senha = [];

    if(incluirMaiusculas) {
        for(let i=0; i<quantidadeCaracteres; i++) {
            const indice = Math.floor(Math.random() * caracteres.maiusculas.length);
            senha.push(caracteres.maiusculas[indice]);
        }
    }

    if(incluirMinusculas) {
        for(let i=0; i<quantidadeCaracteres; i++) {
            const indice = Math.floor(Math.random() * caracteres.minusculas.length);
            senha.push(caracteres.minusculas[indice]);
        }
    }

    if(incluirNumeros) {
        for(let i=0; i<quantidadeCaracteres; i++) {
            const indice = Math.floor(Math.random() * caracteres.numeros.length);
            senha.push(caracteres.numeros[indice]);
        }
    }

    if(incluirSimbolos) {
        for(let i=0; i<quantidadeCaracteres; i++) {
            const indice = Math.floor(Math.random() * caracteres.simbolos.length);
            senha.push(caracteres.simbolos[indice]);
        }
    }

    embaralharSenha(senha);

    return senha;
}

function exibirSenha(senha){
    const textoSenha = document.getElementById("texto-senha");
    textoSenha.textContent = senha.join("");
}

function configurarGeracaoSenha() {
    const botaoGerarSenha = document.getElementById("botao-gerar-senha");

    botaoGerarSenha.addEventListener("click", () => {
        const incluirMaiusculas = document.getElementById("incluir-maiusculas").checked;
        const incluirMinusculas = document.getElementById("incluir-minusculas").checked;
        const incluirNumeros = document.getElementById("incluir-numeros").checked;
        const incluirSimbolos = document.getElementById("incluir-simbolos").checked;

        let quantidadeInclusoes  = 0;
        if(incluirMaiusculas) quantidadeInclusoes ++;
        if(incluirMinusculas) quantidadeInclusoes ++;
        if(incluirNumeros) quantidadeInclusoes ++;
        if(incluirSimbolos) quantidadeInclusoes ++;

        const tamanho = Number(document.getElementById("texto-tamanho-senha").textContent);

        const senha = gerarSenha(tamanho, quantidadeInclusoes, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);
        exibirSenha(senha);
        atualizarNivelSeguranca(tamanho, quantidadeInclusoes);
    });
}

function main() {
    copiarSenha();
    atualizarTamanhoSenha();
    configurarGeracaoSenha();
}

main();