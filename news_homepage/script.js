function mostrarMenu() {
    const nav = document.querySelector('.nav');
    const menuIcon = document.querySelector('.icon-menu');
    const closeIcon = document.querySelector('.icon-close');

    menuIcon.addEventListener('click', function() {
        nav.style.display = 'flex';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'flex';
    });
}

function fecharMenu() {
    const nav = document.querySelector('.nav');
    const menuIcon = document.querySelector('.icon-menu');
    const closeIcon = document.querySelector('.icon-close');

    closeIcon.addEventListener('click', function() {
        nav.style.display = 'none';
        menuIcon.style.display = 'flex';
        closeIcon.style.display = 'none';
    });
}

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
    fecharMenu();
    mostrarMenu();
    adicionarEventoDePegarDadosDaNoticia();
}

main();