import { containerControles } from "../geral.js";
import {aplicarEventosImagemMenu, aplicarEventosTituloMenu, aplicarEventosTextoMenu} from "../gerar-site/gerarMenu.js";


const gerarMenuBtn = document.getElementById("gerar-menu");

gerarMenuBtn.addEventListener("click", gerarMenuControles);

containerControles.addEventListener("click", function(event) {
    if (event.target && event.target.id === "gerar-controles-img-menu") {
        gerarControlesImgMenu();
    }

    if (event.target && event.target.id === "gerar-controles-item-menu") {
        gerarControlesItemMenu();
    }

    if (event.target && event.target.id === "gerar-controles-titulo-menu") {
        gerarControlesTituloMenu();
    }

    
});

function gerarMenuControles() {
    containerControles.innerHTML = `
        <div id="gerar-controles-menu" class="container-controles">
            <button class="botoes-gerar-controles2" id="gerar-controles-titulo-menu">Controles de titulo e cor do fundo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-img-menu">Controles de imagem</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-item-menu">Controles de item</button>
        </div>
    `;
}


function gerarControlesTituloMenu() {
  containerControles.innerHTML = `
        <div id="gerar-controles-menu" class="container-controles">
            <button class="botoes-gerar-controles2" id="gerar-controles-titulo-menu">Controles de titulo e cor do fundo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-img-menu">Controles de imagem</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-item-menu">Controles de item</button>
        </div>

    <h3 class="titulo-editor">Editor de título do menu</h3>
    <form id="editor-titulo-menu-form">
      <fieldset>
        <legend>Controle do título</legend>

        <div class="campo-editor">
          <label for="titulo-menu-texto" class="label-style-main">Texto do título</label>
          <input type="text" id="titulo-menu-texto" placeholder="Digite o título do menu" class="input-style-main">
        </div>

        <div class="campo-editor">
          <label for="titulo-menu-tamanho-fonte" class="label-style-main">Tamanho da fonte (px)</label>
          <input type="number" id="titulo-menu-tamanho-fonte" value="24" min="10" max="72" class="input-style-main">
        </div>

        <div class="campo-editor">
          <label for="titulo-menu-cor-fonte" class="label-style-main">Cor da fonte</label>
          <input type="color" id="titulo-menu-cor-fonte" value="#000000" class="input-style-main">
        </div>

        <div class="campo-editor">
          <label for="titulo-menu-alinhamento" class="label-style-main">Alinhamento do título</label>
          <select id="titulo-menu-alinhamento" class="input-style-main">
            <option value="left">Esquerda</option>
            <option value="center" selected>Centro</option>
            <option value="right">Direita</option>
          </select>
        </div>

        <div class="campo-editor">
          <label for="titulo-menu-cor-fundo" class="label-style-main">Cor do fundo do container</label>
          <input type="color" id="titulo-menu-cor-fundo" value="#ffffff" class="input-style-main">
        </div>
      </fieldset>
    </form>
  `;

  aplicarEventosTituloMenu();
}


function gerarControlesImgMenu() {
    containerControles.innerHTML = `

        <div id="gerar-controles-menu" class="container-controles">
            <button class="botoes-gerar-controles2" id="gerar-controles-titulo-menu">Controles de titulo e cor do fundo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-img-menu">Controles de imagem</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-item-menu">Controles de item</button>
        </div>

    <h3 class="titulo-editor">Editor de menu</h3>
        <form id="editor-menu-form">
            <fieldset>
                <legend>Controle de imagem</legend>

                <div class="campo-editor">
                    <label for="imagem-menu" class="label-style-main">Imagem acima do menu</label>
                    <input type="file" id="imagem-menu" accept="image/*" class="input-style-main">
                </div>

                <div class="campo-editor">
                    <label for="largura-imagem-menu" class="label-style-main">Largura da imagem (px)</label>
                    <input type="number" id="largura-imagem-menu" value="100" min="10" class="input-style-main">
                </div>

                <div class="campo-editor">
                    <label for="altura-imagem-menu" class="label-style-main">Altura da imagem (px)</label>
                    <input type="number" id="altura-imagem-menu" value="100" min="10" class="input-style-main">
                </div>

                <div class="campo-editor">
                    <label for="arredondamento-img-menu" class="label-style-main">Selecione o arredondamento da imagem</label>
                    <input type="number" name="arredondamento-img-menu" class="input-style-main" max="200" min="0" value="0" id="arredondamento-img-menu">
                </div>

                <div class="campo-editor">
                    <label for="cor-borda-menu" class="label-style-main">Cor da borda</label>
                    <input type="color" id="cor-borda-menu" class="input-style-main">
                </div>

                <div class="campo-editor">
                    <label for="espessura-borda-img-menu" class="label-style-main">Espessura da borda (px)</label>
                    <input type="number" id="espessura-borda-img-menu" value="0" min="0" max="10" class="input-style-main">
                </div>

                <div class="campo-editor">
                    <label for="input-estilo-borda-img-item" class="label-style-main">Estilo da borda</label>
                    <select id="input-estilo-borda-img-item" class="input-style-main">
                        <option value="solid">Sólida</option>
                        <option value="dashed">Tracejada</option>
                        <option value="dotted">Pontilhada</option>
                        <option value="double">Dupla</option>
                    </select>
                </div>

                <div class="campo-editor">
                    <label for="gap-img-menu" class="label-style-main">Espaçamento entre imagens (gap)</label>
                    <input type="number" name="gap-img-menu" class="input-style-main" min="0" max="100" value="10" id="gap-img-menu">
                </div>

                <label for="alinhamento-img-menu" class="label-style-main">Alinhamento dos itens</label>
                <select id="alinhamento-img-menu" class="input-style-main">
                    <option value="flex-start">Topo (início)</option>
                    <option value="center">Centro</option>
                    <option value="flex-end">Base (fim)</option>
                    <option value="space-between">Espaço entre</option>
                    <option value="space-around">Espaço ao redor</option>
                </select>

            </fieldset>
        </form>


        <div class="divBotoesSlvExc">
            <button id="btn-salvar-menu" class="btn-salvar--excluir--controles">Salvar</button>
            <button id="btn-excluir-menu" class="btn-salvar--excluir--controles">Excluir</button>
        </div>
    `;

    aplicarEventosImagemMenu();

};

function gerarControlesItemMenu() {
    containerControles.innerHTML = `
            <div id="gerar-controles-menu" class="container-controles">
                <button class="botoes-gerar-controles2" id="gerar-controles-titulo-menu">Controles de titulo e cor do fundo</button>
                <button class="botoes-gerar-controles2" id="gerar-controles-img-menu">Controles de imagem</button>
                <button class="botoes-gerar-controles2" id="gerar-controles-item-menu">Controles de item</button>
            </div>

            <h3 class="titulo-editor">Editor de menu</h3>
                <form>
                    <fieldset>
                        <legend>Controle itens</legend>

                        <div class="campo-editor">
                            <label for="texto-menu" class="label-style-main">Texto do menu</label>
                            <input type="text" id="texto-menu" placeholder="Digite o título do menu" class="input-style-main">
                        </div>

                        <div class="campo-editor">
                            <label for="cor-texto-menu" class="label-style-main">Cor do texto do menu</label>
                            <input type="color" id="cor-texto-menu" value="#000000" class="input-style-main">
                        </div>

                        <div class="campo-editor">
                            <label for="tamanho-fonte-texto-menu" class="label-style-main">Tamanho da fonte do texto do menu (px)</label>
                            <input type="number" id="tamanho-fonte-texto-menu" value="20" min="10" max="48" class="input-style-main">
                        </div>

                        <div class="campo-editor">
                            <label for="gap-item-menu" class="label-style-main">Espaçamento entre imagens (gap)</label>
                            <input type="number" name="gap-item-menu" class="input-style-main" min="0" max="100" value="10" id="gap-item-menu">
                        </div>

                        <label for="alinhamento-item-menu" class="label-style-main">Alinhamento dos itens</label>
                        <select id="alinhamento-item-menu" class="input-style-main">
                            <option value="flex-start">Topo (início)</option>
                            <option value="center">Centro</option>
                            <option value="flex-end">Base (fim)</option>
                            <option value="space-between">Espaço entre</option>
                            <option value="space-around">Espaço ao redor</option>
                        </select>

                    </fieldset>
                </form>

                <div class="divBotoesSlvExc">
                    <button id="btn-salvar-menu" class="btn-salvar--excluir--controles">Salvar</button>
                    <button id="btn-excluir-menu" class="btn-salvar--excluir--controles">Excluir</button>
                </div>
    `;

    aplicarEventosTextoMenu();
}
