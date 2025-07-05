

// VARIAVEIS

let containerControles = document.querySelector("#container-controles");
export {containerControles};


function atualizarCorPlaceholder(cor) {
    document.documentElement.style.setProperty('--placeholder-color', cor);
}
