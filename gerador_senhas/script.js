function atualizarTamanhoSenha() {
    const barraTamanhoSenha = document.getElementById("barra-tamanho-senha");
    const textoTamanhoSenha = document.getElementById("texto-tamanho-senha");

    barraTamanhoSenha.addEventListener("input", () => {
        let valor = barraTamanhoSenha.value;
        let porcentagem = (barraTamanhoSenha.value / 20) * 100;

        if (valor == 0) {
            porcentagem = 0;
            valor = 0
        } else if (valor > 0 && valor <= 5) {
            porcentagem = 25;
            valor = 5;
        } else if (valor > 5 && valor <= 10) {
            porcentagem = 50;
            valor = 10;
        } else if (valor > 10 && valor <= 15) {
            porcentagem = 75;
            valor = 15;
        } else if (valor > 15) {
            porcentagem = 100;
            valor = 20;
        }
        
        textoTamanhoSenha.textContent = valor;
        barraTamanhoSenha.value = valor;
        barraTamanhoSenha.style.background = `linear-gradient(to right, #6c996f ${porcentagem}%, #14131b ${porcentagem}%`;
    });
}

function main() {
    atualizarTamanhoSenha();
}

main();