import { containerControles } from "../geral.js";
import { configurarGaleria } from "../gerar-site/gerarGaleria.js";

const btnGaleria = document.getElementById("gerar-galeria");

btnGaleria.addEventListener("click", gerarControlesGaleria);

function gerarControlesGaleria() {
    containerControles.innerHTML = `
        <h3 class="titulo-editor">Editor de galeria</h3>

                <form>
                    <div class="campo-editor">
                        <label for="cardTitulo" class="label-style-main">Título:</label>
                        <input type="text" id="cardTitulo" value="Titulo do card" class="input-style-main">
                    </div>
                    <div class="campo-editor">
                        <label for="cardDescricao" class="label-style-main">Descrição:</label>
                        <textarea id="cardDescricao" class="input-style-main" rows="5">Descrição do card</textarea>
                    </div>
                    <div class="campo-editor">
                        <label for="cardImagem" class="label-style-main">Imagem:</label>
                        <input type="file" accept="image/*" id="cardImagem" class="input-style-main">
                    </div>

                    <div class="campo-editor">
                        <label for="galeriaBgCor" class="label-style-main">Cor de Fundo da galeria:</label>
                        <input type="color" id="galeriaBgCor" class="input-style-main" value="#ffffff">
                    </div>

                    <div class="campo-editor">
                        <label for="cardBgCor" class="label-style-main">Cor de Fundo:</label>
                        <input type="color" id="cardBgCor" class="input-style-main" value="#ffffff">
                    </div>

                    <div class="campo-editor">
                        <label for="cardTituloCor" class="label-style-main">Cor do Titulo do card:</label>
                        <input type="color" id="cardTituloCor" class="input-style-main" value="#000000">
                    </div>
                    <div class="campo-editor">
                        <label for="cardDescricaoCor" class="label-style-main">Cor da Descrição do card:</label>
                        <input type="color" id="cardDescricaoCor" class="input-style-main" value="#000000">
                    </div>

                    <div class="campo-editor">
                        <label for="cor-borda-form" class="label-style-main">Cor da borda</label>
                        <input type="color" name="corborda" id="cor-borda-form" class="input-style-main" value="#000000">
                    </div>

                    <div class="campo-editor">
                        <label for="espessura-borda-form" class="label-style-main">Espessura da borda (em px)</label>
                        <input type="number" name="Espessura" id="espessura-borda-form" class="input-style-main" placeholder="1" min="1" max="10">
                    </div>

                    <div class="campo-editor">
                        <label for="estilo-borda-form" class="label-style-main">Estilo da borda</label>
                        <select id="estilo-borda-form" class="input-style-main">
                            <option value="solid">Sólida</option>
                            <option value="dashed">Tracejada</option>
                            <option value="dotted">Pontilhada</option>
                            <option value="double">Dupla</option>
                        </select>
                    </div>
                    <div class="campo-editor">
                        <label for="tamanho-card-galeria" class="label-style-main">Tamanho do Card:</label>
                        <select id="tamanho-card-galeria" class="form-control">
                            <option value="pequeno">Pequeno</option>
                            <option value="medio" selected>Médio</option>
                            <option value="grande">Grande</option>
                        </select>
                    </div>
                </form>

                <div style="margin-top: 10px;">
                <button type="button" id="btn-salvar-card" class="btn">Adiconar</button>
                    <button type="button" id="btn-excluir-card" class="btn">Excluir card</button>
                </div>

    `;

    configurarGaleria();
}