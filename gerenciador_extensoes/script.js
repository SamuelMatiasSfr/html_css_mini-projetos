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
                extensions[index].dataset.status = "active";
            } else {
                extensions[index].dataset.status = "inactive";
            }
        });
    });
}

function buscarTodasExtensoes() {
    const extensions = document.querySelectorAll(".article-extension");

    extensions.forEach((extension, index) => {
        extension.style.display = "flex";
    });
}

function buscarExtensoesPorStatus(status) {
    const extensions = document.querySelectorAll(".article-extension");

    extensions.forEach((extension, index) => {
        if(extension.dataset.status === status) {
            extension.style.display = "flex";
        } else {
            extension.style.display = "none";
        }
    });
}

function mudarStatusButtons(statusAll, statusActive, statusInactive) {
    const buttonAll = document.getElementById("button-all");
    const buttonActive = document.getElementById("button-active");
    const buttonInactive = document.getElementById("button-inactive");
    
    buttonAll.dataset.status = statusAll;
    buttonActive.dataset.status = statusActive;
    buttonInactive.dataset.status = statusInactive;
}

function filtrarExtensoes() {
    const buttonAll = document.getElementById("button-all");
    const buttonActive = document.getElementById("button-active");
    const buttonInactive = document.getElementById("button-inactive");

    buttonAll.addEventListener("click", () => {
        mudarStatusButtons("active", "inactive", "inactive");
        buscarTodasExtensoes();
    });

    buttonActive.addEventListener("click", () => {
        mudarStatusButtons("inactive", "active", "inactive");
        buscarExtensoesPorStatus("active");
    });

    buttonInactive.addEventListener("click", () => {
        mudarStatusButtons("inactive", "inactive", "active");
        buscarExtensoesPorStatus("inactive");
    });
}

function main() {
    removerExtensao();
    mudarStatusExtensao();
    filtrarExtensoes();
}

main();