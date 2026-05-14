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

function calcularPontosSeguranca(tamanho, qtdInclusoes) {
    let pontos = 0;

    if(tamanho === 5) pontos += 1;
    if(tamanho === 10) pontos += 2;
    if(tamanho === 15) pontos += 3;
    if(tamanho === 20) pontos += 4;

    if(qtdInclusoes === 1) pontos += 1;
    if(qtdInclusoes === 2) pontos += 2;
    if(qtdInclusoes === 3) pontos += 3;
    if(qtdInclusoes === 4) pontos += 4;

    return pontos;
}

function pintarBarrasSeguranca(qtdBarras, codigoCorBarra) {
    const barrasSeguranca = document.querySelectorAll(".nivel-seguranca-barra");
    barrasSeguranca.forEach((barra, index) => {
        if(index < qtdBarras) {
            barra.style.backgroundColor = codigoCorBarra;
        } else {
            barra.style.backgroundColor = "#14131b";
        }
    });
}

function atualizarNivelSeguranca(tamanho, qtdInclusoes) {
    const pontos = calcularPontosSeguranca(tamanho, qtdInclusoes);
    
    const textoNivelSeguranca = document.getElementById("texto-nivel-seguranca");
    let qtdBarras = 0;
    let codigoCorBarra = "";

    if(pontos >= 0 && pontos <= 2) {
        textoNivelSeguranca.textContent = "Muito Baixo";
        qtdBarras = 1;
        codigoCorBarra = "#d9534f";
    } else if (pontos >= 3 && pontos <= 4) {
        textoNivelSeguranca.textContent = "Baixo";
        qtdBarras = 2;
        codigoCorBarra = "#f0ad4e";
    } else if (pontos >= 5 && pontos <= 6) {
        textoNivelSeguranca.textContent = "Médio";
        qtdBarras = 3;
        codigoCorBarra = "#facb68";
    } else if (pontos >= 7 && pontos <= 8) {
        textoNivelSeguranca.textContent = "Alto";
        qtdBarras = 4;
        codigoCorBarra = "#6c996f";
    }

    pintarBarrasSeguranca(qtdBarras, codigoCorBarra);
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

function gerarSenha(tamanho, qtdInclusoes, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
    const basePorTipo = Math.floor(tamanho / qtdInclusoes);
    let resto = tamanho % qtdInclusoes;

    const caracteres = {};
    const senha = [];

    if(incluirMaiusculas) {
        caracteres.maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const qtdMaiusculas = basePorTipo + (resto > 0 ? 1 : 0);
        resto--;
        for(let i=0; i<qtdMaiusculas; i++) {
            const indice = Math.floor(Math.random() * caracteres.maiusculas.length);
            senha.push(caracteres.maiusculas[indice]);
        }
    }

    if(incluirMinusculas) {
        caracteres.minusculas = "abcdefghijklmnopqrstuvwxyz";
        const qtdMinusculas = basePorTipo + (resto > 0 ? 1 : 0);
        resto--;
        for(let i=0; i<qtdMinusculas; i++) {
            const indice = Math.floor(Math.random() * caracteres.minusculas.length);
            senha.push(caracteres.minusculas[indice]);
        }
    }

    if(incluirNumeros) {
        caracteres.numeros = "0123456789";
        const qtdNumeros = basePorTipo + (resto > 0 ? 1 : 0);
        resto--;
        for(let i=0; i<qtdNumeros; i++) {
            const indice = Math.floor(Math.random() * caracteres.numeros.length);
            senha.push(caracteres.numeros[indice]);
        }
    }

    if(incluirSimbolos) {
        caracteres.simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        const qtdSimbolos = basePorTipo + (resto > 0 ? 1 : 0);
        resto--;
        for(let i=0; i<qtdSimbolos; i++) {
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

function testarInputs(tamanho, qtdInclusoes){
    let inputsValidos = true;
    
    if(tamanho === 0) {
        document.getElementById("alert-tamanho").style.display = "flex";
        inputsValidos = false;
    } else {
        document.getElementById("alert-tamanho").style.display = "none";
    }

    if(qtdInclusoes === 0) {
        document.getElementById("alert-inclusoes").style.display = "flex";
        inputsValidos = false;
    } else {
        document.getElementById("alert-inclusoes").style.display = "none";
    }

    document.getElementById("texto-nivel-seguranca").style.display = inputsValidos ? "flex" : "none";

    return inputsValidos;
}

function configurarGeracaoSenha() {
    const botaoGerarSenha = document.getElementById("botao-gerar-senha");

    botaoGerarSenha.addEventListener("click", () => {
        const incluirMaiusculas = document.getElementById("incluir-maiusculas").checked;
        const incluirMinusculas = document.getElementById("incluir-minusculas").checked;
        const incluirNumeros = document.getElementById("incluir-numeros").checked;
        const incluirSimbolos = document.getElementById("incluir-simbolos").checked;

        let qtdInclusoes  = 0;
        if(incluirMaiusculas) qtdInclusoes ++;
        if(incluirMinusculas) qtdInclusoes ++;
        if(incluirNumeros) qtdInclusoes ++;
        if(incluirSimbolos) qtdInclusoes ++;

        const tamanho = Number(document.getElementById("texto-tamanho-senha").textContent);

        if(testarInputs(tamanho, qtdInclusoes)){
            const senha = gerarSenha(tamanho, qtdInclusoes, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);
            exibirSenha(senha);
            atualizarNivelSeguranca(tamanho, qtdInclusoes);
        } 
    });
}

function main() {
    copiarSenha();
    atualizarTamanhoSenha();
    configurarGeracaoSenha();
}

main();