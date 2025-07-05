export {configurarRodape};

function configurarRodape() {
    let rodape = document.getElementById("rodape");


    if (!rodape) {
        rodape = document.createElement("footer");
        rodape.id = "rodape";
        rodape.textContent = "Texto do rodapé";
        rodape.style.padding = "10px";
        rodape.style.textAlign = "center";
        rodape.style.backgroundColor = "#ffffff";
        rodape.style.color = "#000000";
        document.body.appendChild(rodape);
    }

    
    const inputTexto = document.getElementById("rodapeTexto");
    const inputCorTexto = document.getElementById("rodapeCorTexto");
    const inputTamanhoFonte = document.getElementById("rodapeTamanhoFonte");
    const inputCorFundo = document.getElementById("rodapeCorFundo");
    const inputPadding = document.getElementById("rodapePadding");
    const selectAlinhamento = document.getElementById("rodapeAlinhamento");

    function atualizarRodape() {
        rodape.textContent = inputTexto.value || "Texto do rodapé";
        rodape.style.color = inputCorTexto.value || "#000000";
        rodape.style.fontSize = (inputTamanhoFonte.value || 16) + "px";
        rodape.style.backgroundColor = inputCorFundo.value || "#ffffff";
        rodape.style.textAlign = selectAlinhamento.value || "center";
        rodape.style.padding = (inputPadding.value || 10) + "px";
    }

   
    inputTexto.addEventListener("input", atualizarRodape);
    inputCorTexto.addEventListener("input", atualizarRodape);
    inputTamanhoFonte.addEventListener("input", atualizarRodape);
    inputCorFundo.addEventListener("input", atualizarRodape);
    inputPadding.addEventListener("input", atualizarRodape);
    selectAlinhamento.addEventListener("change", atualizarRodape);

    
    atualizarRodape();
}
