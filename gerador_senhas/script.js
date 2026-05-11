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

function calcularPontosSeguranca(tamanho, numCheckboxesMarcadas) {
    let pontos = 0;

    if(tamanho === 5) pontos += 1;
    if(tamanho === 10) pontos += 2;
    if(tamanho === 15) pontos += 3;
    if(tamanho === 20) pontos += 4;

    if(numCheckboxesMarcadas === 1) pontos += 1;
    if(numCheckboxesMarcadas === 2) pontos += 2;
    if(numCheckboxesMarcadas === 3) pontos += 3;
    if(numCheckboxesMarcadas === 4) pontos += 4;

    return pontos;
}

function pintarBarrasSeguranca(numBarras, codigoCorBarra) {
    const barrasSeguranca = document.querySelectorAll(".barra-seguranca");
    barrasSeguranca.forEach((barra, index) => {
        if(index < numBarras) {
            barra.style.backgroundColor = codigoCorBarra;
        } else {
            barra.style.backgroundColor = "#14131b";
        }
    });
}

function atualizarNivelSeguranca(tamanho, numCheckboxesMarcadas) {
    const pontos = calcularPontosSeguranca(tamanho, numCheckboxesMarcadas);
    
    const textoNivelSeguranca = document.getElementById("texto-nivel-seguranca");
    let numBarras = 0;
    let codigoCorBarra = "";

    if(pontos >= 0 && pontos <= 2) {
        textoNivelSeguranca.textContent = "Muito Baixo";
        numBarras = 1;
        codigoCorBarra = "#d9534f";
    } else if (pontos >= 3 && pontos <= 4) {
        textoNivelSeguranca.textContent = "Baixo";
        numBarras = 2;
        codigoCorBarra = "#f0ad4e";
    } else if (pontos >= 5 && pontos <= 6) {
        textoNivelSeguranca.textContent = "Médio";
        numBarras = 3;
        codigoCorBarra = "#facb68";
    } else if (pontos >= 7 && pontos <= 8) {
        textoNivelSeguranca.textContent = "Alto";
        numBarras = 4;
        codigoCorBarra = "#6c996f";
    }

    pintarBarrasSeguranca(numBarras, codigoCorBarra);
}

function calcularPorcentagemTiposCaracteres(numCheckboxesMarcadas) {
    return 1 / numCheckboxesMarcadas;
}

function embaralharSenha(senha) {
    for(let j=0; j<5; j++) {
        for(let i = senha.length-1; i >= 0; i--) {
            const indiceNovo = Math.floor(Math.random() * senha.length);
            const auxiliar = senha[indiceNovo];
            senha[indiceNovo] = senha[i];
            senha[i] = auxiliar;
        }
    }
}

// função que gera a senha aleatória
function gerarSenha(tamanho, numCheckboxesMarcadas, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
    const porcentagemTipoCaractere = 1 / numCheckboxesMarcadas;

    const caracteres = {
        maiusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        minusculas: "abcdefghijklmnopqrstuvwxyz",
        numeros: "0123456789",
        simbolos: "!@#$%^&*()_+~`|}{[]:;?><,./-="
    };

    const senha = [];

    if(incluirMaiusculas) {
        const quantidadeCaracteres = Math.round(tamanho * porcentagemTipoCaractere);
        for(let i=0; i< quantidadeCaracteres; i++) {
            const indice = Math.floor(Math.random() * caracteres.maiusculas.length);
            senha.push(caracteres.maiusculas[indice]);
        }
    }

    if(incluirMinusculas) {
        const quantidadeCaracteres = Math.round(tamanho * porcentagemTipoCaractere);
        for(let i=0; i< quantidadeCaracteres; i++) {
            const indice = Math.floor(Math.random() * caracteres.minusculas.length);
            senha.push(caracteres.minusculas[indice]);
        }
    }

    if(incluirNumeros) {
        const quantidadeCaracteres = Math.round(tamanho * porcentagemTipoCaractere);
        for(let i=0; i< quantidadeCaracteres; i++) {
            const indice = Math.floor(Math.random() * caracteres.numeros.length);
            senha.push(caracteres.numeros[indice]);
        }
    }

    if(incluirSimbolos) {
        const quantidadeCaracteres = Math.round(tamanho * porcentagemTipoCaractere);
        for(let i=0; i< quantidadeCaracteres; i++) {
            const indice = Math.floor(Math.random() * caracteres.simbolos.length);
            senha.push(caracteres.simbolos[indice]);
        }
    }

    embaralharSenha(senha);

    return senha;
}

function exibirSenha(senha){
    const textoSenhaGerada = document.getElementById("senha-gerada");
    textoSenhaGerada.textContent = senha.join("");
}

function funcao() {
    const botaoGerarSenha = document.getElementById("gerar-senha");

    botaoGerarSenha.addEventListener("click", () => {
        const incluirMaiusculas = document.getElementById("incluir-maiusculas").checked;
        const incluirMinusculas = document.getElementById("incluir-minusculas").checked;
        const incluirNumeros = document.getElementById("incluir-numeros").checked;
        const incluirSimbolos = document.getElementById("incluir-simbolos").checked;

        let numCheckboxesMarcadas = 0;
        if(incluirMaiusculas) numCheckboxesMarcadas++;
        if(incluirMinusculas) numCheckboxesMarcadas++;
        if(incluirNumeros) numCheckboxesMarcadas++;
        if(incluirSimbolos) numCheckboxesMarcadas++;

        const tamanho = Number(document.getElementById("texto-tamanho-senha").textContent);

        const senha = gerarSenha(tamanho, numCheckboxesMarcadas, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);
        exibirSenha(senha);
        atualizarNivelSeguranca(tamanho, numCheckboxesMarcadas);
    });
}

function main() {
    copiarSenha();
    atualizarTamanhoSenha();
    funcao();
}

main();