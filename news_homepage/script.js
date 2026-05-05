function preencherNoticia(imagem, titulo, resumo) {
    const imagemNoticia = document.getElementById('new-article-image');
    const tituloNoticia = document.getElementById('new-article-title');
    const resumoNoticia = document.getElementById('new-article-summary');
    
    imagemNoticia.src = imagem;
    tituloNoticia.textContent = titulo;
    resumoNoticia.textContent = resumo;
}

function adicionarEventoDePegarDadosDaNoticia() {
    for(let i=0; i<3; i++){
        const tituloNoticia = document.getElementById('aside-item-' + i).querySelector('h3');
        tituloNoticia.addEventListener('click', function() {
            const imagemNoticia = document.getElementById('aside-item-' + i).querySelector('img');
            const resumoNoticia = document.getElementById('aside-item-' + i).querySelector('p');
        
            preencherNoticia(imagemNoticia.src, tituloNoticia.textContent, resumoNoticia.textContent);
        });
    }
    return dadosNoticia;
}

function main() {
    adicionarEventoDePegarDadosDaNoticia();
}

main();