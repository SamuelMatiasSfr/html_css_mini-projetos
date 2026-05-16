function removerExtensao() {
    const extensions = document.querySelectorAll(".article-extension");
    const buttonsRemove = document.querySelectorAll(".extension-button-remove");    

    buttonsRemove.forEach((button, index) => {
        button.addEventListener("click", () => {
            if(extensions[index]){
                extensions[index].remove();
            }
        });
    });
}

function mudarStatusExtensao() {
    const extensions = document.querySelectorAll(".article-extension");
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach((toggle, index) => {
        toggle.addEventListener("change", () => {
            if(toggle.checked) {
                extensions[index].dataset.status = "inactive";
            } else {
                extensions[index].dataset.status = "active";
            }
        });
    });
}

function main() {
    removerExtensao();
    mudarStatusExtensao();
}

main();