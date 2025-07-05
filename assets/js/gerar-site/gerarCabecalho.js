export {configurarGeraisCabecalho, configurarLogoCabecalho, configurarTextoCabecalho, configurarCamposFormCabecalho};

let containerCabecalho = document.querySelector("#cabecalho");

function configurarGeraisCabecalho() {
    let inputPadding = document.querySelector("#espacamento-interno-cabecalho--editor");
    let inputCorFundo = document.querySelector("#cor-fundo-cabecalho--editor");
    const inputGap = document.getElementById("gap-itens-cabecalho");
    let inputCorBorda = document.querySelector("#input-cor-borda-cabecalho");
    let inputEspessuraBorda = document.querySelector("#input-espessura-borda-cabecalho");
    let inputEstiloBorda = document.querySelector("#input-estilo-borda-cabecalho");

    let alinhamentoItensCabecalho = document.getElementById("alinhamento-itens-cabecalho");

    if (inputPadding) {
        inputPadding.addEventListener("input", function () {
            containerCabecalho.style.padding = inputPadding.value + "px";
        });
    }

    if (inputCorFundo) {
        inputCorFundo.addEventListener("input", function () {
            containerCabecalho.style.backgroundColor = inputCorFundo.value;
        });
    }

    if (inputCorBorda && inputEspessuraBorda && inputEstiloBorda) {
        inputCorBorda.addEventListener("input", atualizarBorda);
        inputEspessuraBorda.addEventListener("input", atualizarBorda);
        inputEstiloBorda.addEventListener("change", atualizarBorda);
    }

    function atualizarBorda() {
        let cor = inputCorBorda.value;
        let largura = inputEspessuraBorda.value;
        let estilo = inputEstiloBorda.value;

        if (cor !== "" && largura !== "" && estilo !== "" && largura > 0) {
            containerCabecalho.style.border = largura + "px " + estilo + " " + cor;
        } else {
            containerCabecalho.style.border = "none";
        }
    }

    inputGap.addEventListener("input", () => {
        cabecalho.style.gap = inputGap.value + "px";
    });

    alinhamentoItensCabecalho.addEventListener("change", function() {
        let valor = alinhamentoItensCabecalho.value;
        if (valor) {
            containerCabecalho.style.justifyContent = valor;
        }
    });
}

function configurarLogoCabecalho() {
    let inputLogo = document.querySelector("#logo-cabecalho--editor");
    let inputLargura = document.querySelector("#largula-logo-cabecalho--editor");
    let inputAltura = document.querySelector("#altura-logo-cabecalho--editor");
    let inputArredondamento = document.querySelector("#arredondamento-logo-cabecalho");

    let inputCorBorda = document.querySelector("#input-cor-borda-logo-cabecalho");
    let inputEspessuraBorda = document.querySelector("#input-espessura-borda-logo-cabecalho");
    let inputEstiloBorda = document.querySelector("#input-estilo-borda-logo-cabecalho");

    let containerImgCabecalho = document.querySelector(".img-cabecalho");
    let imgLogo = containerImgCabecalho.querySelector("img.logo-cabecalho");

    if (!imgLogo) {
        imgLogo = document.createElement("img");
        imgLogo.classList.add("logo-cabecalho");
        imgLogo.style.width = "40px";
        imgLogo.style.height = "40px";
        containerImgCabecalho.appendChild(imgLogo);
    }

    if (inputLogo) {
        inputLogo.addEventListener("change", function () {
            let file = inputLogo.files[0];
            if (file) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    imgLogo.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (inputLargura) {
        inputLargura.addEventListener("input", function () {
            imgLogo.style.width = inputLargura.value + "px";
        });
    }

    if (inputAltura) {
        inputAltura.addEventListener("input", function () {
            imgLogo.style.height = inputAltura.value + "px";
        });
    }

    if (inputArredondamento) {
        inputArredondamento.addEventListener("input", function () {
            imgLogo.style.borderRadius = inputArredondamento.value + "px";
        });
    }

    function atualizarBorda() {
        const espessura = parseInt(inputEspessuraBorda.value, 10);
        const cor = inputCorBorda.value;
        const estilo = inputEstiloBorda.value;

        if (espessura > 0) {
            imgLogo.style.border = `${espessura}px ${estilo} ${cor}`;
        } else {
            imgLogo.style.border = "none";
        }
    }

    if (inputCorBorda) {
        inputCorBorda.addEventListener("input", atualizarBorda);
    }

    if (inputEspessuraBorda) {
        inputEspessuraBorda.addEventListener("input", atualizarBorda);
    }

    if (inputEstiloBorda) {
        inputEstiloBorda.addEventListener("change", atualizarBorda);
    }

    atualizarBorda();
}

function configurarTextoCabecalho() {
    let textoCabecalho = document.querySelector("#texto-cabecalho");

    let inputTexto = document.querySelector("#texto-cabecalho--editor");
    let inputFonte = document.querySelector("#fonte-texto-cabecalho--editor");
    let inputCor = document.querySelector("#cor-texto-cabecalho--editor");
    let inputCorBorda = document.querySelector("#input-cor-borda-texto-cabecalho");
    let inputEspessuraBorda = document.querySelector("#input-espessura-borda-texto-cabecalho");
    let selectEstiloBorda = document.querySelector("#input-estilo-borda-texto-cabecalho");

    if (inputTexto) {
        inputTexto.addEventListener("input", function () {
            textoCabecalho.textContent = inputTexto.value;
        });
    }

    if (inputFonte) {
        inputFonte.addEventListener("input", function () {
            textoCabecalho.style.fontSize = inputFonte.value + "px";
        });
    }

    if (inputCor) {
        inputCor.addEventListener("input", function () {
            textoCabecalho.style.color = inputCor.value;
        });
    }

    if (inputCorBorda) {
        inputCorBorda.addEventListener("input", function () {
            textoCabecalho.style.borderColor = inputCorBorda.value;
            textoCabecalho.style.borderStyle = textoCabecalho.style.borderStyle || 'solid';
        });
    }

    if (inputEspessuraBorda) {
        inputEspessuraBorda.addEventListener("input", function () {
            textoCabecalho.style.borderWidth = inputEspessuraBorda.value + "px";
            textoCabecalho.style.borderStyle = textoCabecalho.style.borderStyle || 'solid';
        });
    }

    if (selectEstiloBorda) {
        selectEstiloBorda.addEventListener("change", function () {
            textoCabecalho.style.borderStyle = selectEstiloBorda.value;
        });
    }
}

function configurarCamposFormCabecalho() {
    const camposCriados = [];
    const containerCampos = document.getElementById("form-cabecalho");

    const tipoCampo = document.getElementById("input-selecionar-tipo-campoCabecalho");
    const tituloCampo = document.getElementById("input-titulo-label-campoCabelho");
    const tamanhoFonteLabel = document.getElementById("input-tamanho-fonte-labelCabelho");
    const corTitulo = document.getElementById("input-cor-titulo-label-campoCabelho");
    const placeholder = document.getElementById("input-placeholder-label-campoCabecalho");
    const tamanhoFontePlaceholder = document.getElementById("input-tamanho-fonte-placeholderCabecalho");
    const corBorda = document.getElementById("input-cor-borda-campoCabecalho");
    const espessuraBorda = document.getElementById("input-espessura-borda-campoCabecalho");
    const estiloBorda = document.getElementById("input-estilo-borda-campoCabecalho");

    const btnSalvar = document.getElementById("btn-salvar-form-cabecalho");
    const btnExcluir = document.getElementById("btn-excluir-form-cabecalho");

    let previewWrapper = null;
    let previewLabel = null;
    let previewCampo = null;

    const inputsDeEstilo = [
        { el: tituloCampo, evento: "input" },
        { el: tamanhoFonteLabel, evento: "input" },
        { el: corTitulo, evento: "input" },
        { el: placeholder, evento: "input" },
        { el: tamanhoFontePlaceholder, evento: "input" },
        { el: corBorda, evento: "input" },
        { el: espessuraBorda, evento: "input" },
        { el: estiloBorda, evento: "change" },
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
        wrapper.className = "campo-editor";

        const label = document.createElement("label");
        label.textContent = labelText;
        label.classList.add("label-style-main");
        label.style.color = colorLabel;
        label.style.fontSize = `${fontSizeLabel}px`;

        let campo;

        if (tipo === "submit") {
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

    inputsDeEstilo.forEach(({ el, evento }) => {
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
        corTitulo.value = "#FFFFFF";
        placeholder.value = "";
        tamanhoFontePlaceholder.value = "";
        corBorda.value = "#cc84ff";
        espessuraBorda.value = "";
        estiloBorda.value = "solid";
    };

    btnExcluir.onclick = function () {
        if (camposCriados.length > 0) {
            const ultimoCampo = camposCriados.pop();
            ultimoCampo.remove();
        }
    };
}
