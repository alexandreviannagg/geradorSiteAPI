export {configurarTituloFormulario, configurarCamposFormulario};

function configurarTituloFormulario() {
    const inputTitulo = document.getElementById("input-titulo-form");
    const inputTamanhoFonte = document.getElementById("input-tamanho-fonte-titulo-form");
    const inputCorTitulo = document.getElementById("input-cor-titulo-form");
    const inputCorFundo = document.getElementById("input-cor-fundo-titulo-form");
    const inputCorBorda = document.getElementById("input-cor-borda-form");
    const inputEspessuraBorda = document.getElementById("input-espessura-borda-form");
    const inputEstiloBorda = document.getElementById("input-estilo-borda-form");

    const containerFormulario = document.getElementById("formulario");
    const containerTitulo = document.getElementById("titulo-formulario");

    let tituloForm = containerTitulo.querySelector("h2");
    if (!tituloForm) {
        tituloForm = document.createElement("h2");
        containerTitulo.appendChild(tituloForm);
    }

    function atualizarTitulo() {
        tituloForm.textContent = inputTitulo.value;
        tituloForm.style.fontSize = `${inputTamanhoFonte.value || 24}px`;
        tituloForm.style.color = inputCorTitulo.value;
    }

    function atualizarEstilosFormulario() {
        containerFormulario.style.backgroundColor = inputCorFundo.value;
        containerFormulario.style.border = `${inputEspessuraBorda.value || 1}px ${inputEstiloBorda.value} ${inputCorBorda.value}`;
        containerFormulario.style.padding = "20px";
    }

    inputTitulo.addEventListener("input", atualizarTitulo);
    inputTamanhoFonte.addEventListener("input", atualizarTitulo);
    inputCorTitulo.addEventListener("input", atualizarTitulo);

    inputCorFundo.addEventListener("input", atualizarEstilosFormulario);
    inputCorBorda.addEventListener("input", atualizarEstilosFormulario);
    inputEspessuraBorda.addEventListener("input", atualizarEstilosFormulario);
    inputEstiloBorda.addEventListener("change", atualizarEstilosFormulario);

    atualizarTitulo();
    atualizarEstilosFormulario();
}

function configurarCamposFormulario() {
    const camposCriados = [];
    const containerCampos = document.getElementById("campos-formulario");

    const tipoCampo = document.getElementById("input-selecionar-tipo-campo");
    const tituloCampo = document.getElementById("input-titulo-label-campo");
    const tamanhoFonteLabel = document.getElementById("input-tamanho-fonte-label");
    const corTitulo = document.getElementById("input-cor-titulo-label-campo");
    const placeholder = document.getElementById("input-placeholder-label-campo");
    const tamanhoFontePlaceholder = document.getElementById("input-tamanho-fonte-placeholder");
    const corBorda = document.getElementById("input-cor-borda-campo");
    const espessuraBorda = document.getElementById("input-espessura-borda-campo");
    const estiloBorda = document.getElementById("input-estilo-borda-campo");

    const btnSalvar = document.getElementById("btn-salvar-form");
    const btnExcluir = document.getElementById("btn-excluir-form");

    let previewWrapper = null;
    let previewLabel = null;
    let previewCampo = null;

    const inputsDeEstilo = [
        {el: tituloCampo, evento: "input"},
        {el: tamanhoFonteLabel, evento: "input"},
        {el: corTitulo, evento: "input"},
        {el: placeholder, evento: "input"},
        {el: tamanhoFontePlaceholder, evento: "input"},
        {el: corBorda, evento: "input"},
        {el: espessuraBorda, evento: "input"},
        {el: estiloBorda, evento: "change"},
    ];

    function criarCampo() {
        const tipo = tipoCampo.value;
        const labelText = tituloCampo.value;
        const fontSizeLabel = tamanhoFonteLabel.value || "16";
        const colorLabel = corTitulo.value || "#000000";
        const placeholderText = placeholder.value;
        const fontSizePlaceholder = tamanhoFontePlaceholder.value || "14";
        const borderColor = corBorda.value || "#000000";
        const borderWidth = espessuraBorda.value || 1;
        const borderStyle = estiloBorda.value || "solid";

        const wrapper = document.createElement("div");
        wrapper.className = "campo-gerado";

        const label = document.createElement("label");
        label.textContent = labelText;
        label.classList.add("label-style-main");
        label.style.color = colorLabel;
        label.style.fontSize = `${fontSizeLabel}px`;

        let campo;

        if (tipo === "textarea") {
            campo = document.createElement("textarea");
        } else if (tipo === "select") {
            campo = document.createElement("select");
            const option = document.createElement("option");
            option.textContent = "Opção 1";
            campo.appendChild(option);
        } else if (tipo === "submit") {
            campo = document.createElement("button");
            campo.type = "submit";
            campo.textContent = labelText || "Enviar";
        } else {
            campo = document.createElement("input");
            campo.type = tipo;
        }

        if (campo.tagName !== "BUTTON") {
            campo.placeholder = placeholderText;
            campo.style.fontSize = `${fontSizePlaceholder}px`;
        }

        campo.classList.add("input-style-main");
        campo.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
        campo.style.marginTop = "5px";
        campo.style.display = "block";
        campo.style.width = "80%"
        campo.style.padding = "5px";

        wrapper.appendChild(label);
        wrapper.appendChild(campo);

        return wrapper;
    }

    function atualizarPreview() {
        if (!previewWrapper) return;

        if (previewLabel) {
            previewLabel.textContent = tituloCampo.value;
            previewLabel.style.fontSize = (tamanhoFonteLabel.value || "16") + "px";
            previewLabel.style.color = corTitulo.value || "#000";
        }

        if (previewCampo.tagName !== "BUTTON") {
            previewCampo.placeholder = placeholder.value;
            previewCampo.style.fontSize = (tamanhoFontePlaceholder.value || "14") + "px";
        } else {
            previewCampo.textContent = tituloCampo.value || "Enviar";
        }

        previewCampo.style.border = `${espessuraBorda.value || 1}px ${estiloBorda.value || "solid"} ${corBorda.value || "#000"}`;
    }

    tipoCampo.addEventListener("change", () => {
        if (previewWrapper) {
            previewWrapper.remove();
        }

        previewWrapper = document.createElement("div");
        previewWrapper.classList.add("campo-editor");

        previewLabel = document.createElement("label");
        previewLabel.classList.add("label-style-main");

        const tipo = tipoCampo.value;
        if (tipo === "textarea") {
            previewCampo = document.createElement("textarea");
        } else if (tipo === "select") {
            previewCampo = document.createElement("select");
            const option = document.createElement("option");
            option.textContent = "Opção 1";
            previewCampo.appendChild(option);
        } else if (tipo === "submit") {
            previewCampo = document.createElement("button");
            previewCampo.type = "submit";
            previewCampo.textContent = tituloCampo.value || "Enviar";
        } else {
            previewCampo = document.createElement("input");
            previewCampo.type = tipo;
        }

        previewCampo.classList.add("input-style-main");
        previewCampo.style.marginTop = "5px";
        previewCampo.style.display = "block";
        previewCampo.style.padding = "5px";

        if (tipo !== "submit") {
            previewWrapper.appendChild(previewLabel);
        }
        previewWrapper.appendChild(previewCampo);

        containerCampos.appendChild(previewWrapper);

        atualizarPreview();
    });

    inputsDeEstilo.forEach(({el, evento}) => {
        el.addEventListener(evento, atualizarPreview);
    });

    btnSalvar.onclick = function () {
        if (!previewWrapper) return alert("Selecione um tipo de campo primeiro!");

        const novoCampo = criarCampo();
        containerCampos.appendChild(novoCampo);
        camposCriados.push(novoCampo);

        previewWrapper.remove();
        previewWrapper = null;
        previewLabel = null;
        previewCampo = null;

        tipoCampo.value = "op";
        tituloCampo.value = "";
        tamanhoFonteLabel.value = "";
        corTitulo.value = "#000000";
        placeholder.value = "";
        tamanhoFontePlaceholder.value = "";
        corBorda.value = "#000000";
        espessuraBorda.value = "";
        estiloBorda.value = "";
    };

    btnExcluir.onclick = function () {
        if (camposCriados.length > 0) {
            const ultimoCampo = camposCriados.pop();
            ultimoCampo.remove();
        }
    };
}
