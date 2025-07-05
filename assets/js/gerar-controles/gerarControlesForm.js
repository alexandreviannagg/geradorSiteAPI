import { containerControles } from "../geral.js";
import { configurarTituloFormulario, configurarCamposFormulario } from "../gerar-site/gerarForm.js";

const btnForm = document.getElementById("gerar-formulario");

btnForm.addEventListener("click", gerarControlesForm);

containerControles.addEventListener("click", function(event) {
    if (event.target && event.target.id === "gerar-controles-titulo-form") {
        gerarControlesTituloFundoForm();
    }

    if (event.target && event.target.id === "gerar-controles-campo-form") {
        gerarControlesCampoForm();
    }

    
    
});

function gerarControlesForm() {
    containerControles.innerHTML = `
        <div id="gerar-controles-form" class="container-controles">
            <button class="botoes-gerar-controles2" id="gerar-controles-titulo-form">Controles de titulo e cor do fundo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-campo-form">Controles de Campo</button>
        </div>
    `;
}


function gerarControlesTituloFundoForm() {
    containerControles.innerHTML = `
        <div id="gerar-controles-form" class="container-controles">
            <button class="botoes-gerar-controles2" id="gerar-controles-titulo-form">Controles de titulo e cor do fundo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-campo-form">Controles de Campo</button>
        </div>


        <h3 class="titulo-editor">Editor de formulário</h3>

        <form  id="fom-titulo">
                    <fieldset>
                        <legend>
                            Gerar titulo e cor do fondo
                        </legend>

                        <div class="campo-editor">
                            <label for="input-titulo-form" class="label-style-main">Escreva o titulo do formulario</label>
                            <input type="text" name="titulo" id="input-titulo-form" class="input-style-main" placeholder="Digite o titulo aqui...">
                        </div>

                        <div class="campo-editor">
                            <label for="input-tamanho-fonte-titulo-form" class="label-style-main">Informe o tamanho da fonte do titulo</label>
                            <input type="number" name="fonte" id="input-tamanho-fonte-titulo-form" class="input-style-main" placeholder="24" value="24" min="24" max="60">
                        </div>

                        <div class="campo-editor">
                            <label for="input-cor-titulo-form" class="label-style-main">Cor da fonte do titulo</label>
                            <input type="color" name="cor" id="input-cor-titulo-form" class="input-style-main" >
                        </div>

                        <div class="campo-editor">
                            <label for="input-cor-fundo-titulo-form" class="label-style-main">Cor do fundo do formulário</label>
                            <input type="color" name="corfundo" id="input-cor-fundo-titulo-form" class="input-style-main" value="#ffffff">
                        </div>

                        <div class="campo-editor">
                            <label for="input-cor-borda-form" class="label-style-main">Cor da borda</label>
                            <input type="color" name="corborda" id="input-cor-borda-form" class="input-style-main" >
                        </div>

                        <div class="campo-editor">
                            <label for="input-espessura-borda-form" class="label-style-main">Espessura da borda (em px)</label>
                            <input type="number" name="Espessura" id="input-espessura-borda-form" class="input-style-main" placeholder="0" value="0" min="0" max="10">
                        </div>

                        <div class="campo-editor">
                            <label for="input-estilo-borda-form" class="label-style-main">Estilo da borda</label>
                            <select id="input-estilo-borda-form" class="input-style-main">
                                <option value="solid">Sólida</option>
                                <option value="dashed">Tracejada</option>
                                <option value="dotted">Pontilhada</option>
                                <option value="double">Dupla</option>
                            </select>
                        </div>
                    </fieldset>
                </form>
    `;

    configurarTituloFormulario();
}


function gerarControlesCampoForm() {
    containerControles.innerHTML = `
        <div id="gerar-controles-form" class="container-controles">
            <button class="botoes-gerar-controles2" id="gerar-controles-titulo-form">Controles titulo e cor do fundo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-campo-form">Controles Campo</button>
        </div>

        <h3 class="titulo-editor">Editor de formulário</h3>
        <form id="form-campo">
                    <fieldset>
                        <legend>
                            Gerar campo
                        </legend>

                        <div class="campo-editor">
                            <label for="input-selecionar-tipo-campo" class="label-style-main">Selecione um campo</label>
                            <select name="sselect" id="input-selecionar-tipo-campo" class="input-style-main">
                                <option value="op">SELECIONAR</option>
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                                <option value="password">Senha</option>
                                <option value="tel">Telefone</option>
                                <option value="date">Data</option>
                                <option value="number">Numero</option>
                                <option value="textarea">Descrição</option>
                                <option value="select">Select</option>
                                <option value="submit">Botão</option>
                            </select>
                        </div>

                        <div class="campo-editor">
                            <label for="input-titulo-label-campo" class="label-style-main">Informe o titulo do campo</label>
                            <input type="text" name="title" id="input-titulo-label-campo" class="input-style-main" placeholder="Informe aqui..">
                        </div>



                        <div class="campo-editor">
                            <label for="input-tamanho-fonte-label" class="label-style-main">Tamanho da fonte do label (em px)</label>
                            <input type="number" name="fonte" id="input-tamanho-fonte-label" class="input-style-main" placeholder="16" min="16" max="30">
                        </div>





                        <div class="campo-editor">
                            <label for="input-cor-titulo-label-campo" class="label-style-main">Selecione a cor do titulo do campo</label>
                            <input type="color" name="cor" id="input-cor-titulo-label-campo" class="input-style-main" >
                        </div>

                        <div class="campo-editor">
                            <label for="input-placeholder-label-campo" class="label-style-main">Informe o placeholder do campo</label>
                            <input type="text" name="placeholder" id="input-placeholder-label-campo" class="input-style-main" placeholder="Informe o placeholder...">
                        </div>

                        <div class="campo-editor">
                            <label for="input-tamanho-fonte-placeholder" class="label-style-main">Tamanho da fonte do placeholder (em px)</label>
                            <input type="number" name="fonte-place" id="input-tamanho-fonte-placeholder" class="input-style-main" placeholder="12" min="12" max="18">
                        </div>


                        <div class="campo-editor">
                            <label for="input-cor-borda-campo" class="label-style-main">Cor da borda do campo</label>
                            <input type="color" name="corborda" id="input-cor-borda-campo" class="input-style-main" value="#000000">
                        </div>

                        <div class="campo-editor">
                            <label for="input-espessura-borda-campo" class="label-style-main">Espessura da borda (em px)</label>
                            <input type="number" name="Espessura" id="input-espessura-borda-campo" class="input-style-main" placeholder="1" min="1" max="4">
                        </div>

                        <div class="campo-editor">
                            <label for="input-estilo-borda-campo" class="label-style-main">Estilo da borda</label>
                            <select id="input-estilo-borda-campo" class="input-style-main">
                                <option value="solid">Sólida</option>
                                <option value="dashed">Tracejada</option>
                                <option value="dotted">Pontilhada</option>
                                <option value="double">Dupla</option>
                            </select>
                        </div>

                        
                    </fieldset>
                </form>

                <div class="divBotoesSlvExc">
                    <button id="btn-salvar-form" class="btn-salvar--excluir--controles">Salvar</button>
                    <button id="btn-excluir-form" class="btn-salvar--excluir--controles">Excluir</button>
                </div>
    `;

    configurarCamposFormulario();
}