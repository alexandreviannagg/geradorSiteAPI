import { containerControles } from "../geral.js";
import { configurarRodape } from "../gerar-site/gerarRodape.js";

const btnRodape = document.getElementById("gerar-rodape");

btnRodape.addEventListener("click", gerarControlesRodape);

function gerarControlesRodape() {
    containerControles.innerHTML = `
        <h3 class="titulo-editor">Editor de Rodapé</h3>

        <form>
            <div class="campo-editor">
                <label for="rodapeTexto" class="label-style-main">Texto do rodapé:</label>
                <input type="text" id="rodapeTexto" class="input-style-main" placeholder="Digite o texto do rodapé">
            </div>

            <div class="campo-editor">
                <label for="rodapeCorTexto" class="label-style-main">Cor do texto:</label>
                <input type="color" id="rodapeCorTexto" class="input-style-main" value="#000000">
            </div>

            <div class="campo-editor">
                <label for="rodapeTamanhoFonte" class="label-style-main">Tamanho da fonte (px):</label>
                <input type="number" id="rodapeTamanhoFonte" class="input-style-main" min="8" max="48" placeholder="16">
            </div>

            <div class="campo-editor">
                <label for="rodapeCorFundo" class="label-style-main">Cor de fundo:</label>
                <input type="color" id="rodapeCorFundo" class="input-style-main" value="#ffffff">
            </div>

            <div class="campo-editor">
                <label for="rodapePadding" class="label-style-main">Espaçamento interno (padding em px):</label>
                <input type="number" id="rodapePadding" class="input-style-main" min="0" max="100" placeholder="10">
            </div>

            <div class="campo-editor">
                <label for="rodapeAlinhamento" class="label-style-main">Alinhamento do texto:</label>
                <select id="rodapeAlinhamento" class="input-style-main">
                    <option value="left">Esquerda</option>
                    <option value="center" selected>Centro</option>
                    <option value="right">Direita</option>
                </select>
            </div>
        </form>
    `;

    configurarRodape();
}
