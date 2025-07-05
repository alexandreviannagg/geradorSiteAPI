export {aplicarEventosImagemMenu, aplicarEventosTituloMenu, aplicarEventosTextoMenu};


function aplicarEventosTituloMenu() {
  const inputTexto = document.getElementById("titulo-menu-texto");
  const inputTamanhoFonte = document.getElementById("titulo-menu-tamanho-fonte");
  const inputCorFonte = document.getElementById("titulo-menu-cor-fonte");
  const selectAlinhamento = document.getElementById("titulo-menu-alinhamento");
  const inputCorFundo = document.getElementById("titulo-menu-cor-fundo");

  const tituloH2 = document.querySelector("#titulo-menu h2");
  const containerMenu = document.getElementById("menu");
  const h4TituloMenu = document.getElementById("seu-menu-aq");

  if (h4TituloMenu) {
    h4TituloMenu.style.display = "none";
  }

  
  inputTexto.addEventListener("input", () => {
    tituloH2.textContent = inputTexto.value;
  });

 
  inputTamanhoFonte.addEventListener("input", () => {
    tituloH2.style.fontSize = `${inputTamanhoFonte.value}px`;
  });

  
  inputCorFonte.addEventListener("input", () => {
    tituloH2.style.color = inputCorFonte.value;
  });


  selectAlinhamento.addEventListener("change", () => {
    tituloH2.style.textAlign = selectAlinhamento.value;
  });

 
  inputCorFundo.addEventListener("input", () => {
    containerMenu.style.backgroundColor = inputCorFundo.value;
  });

 
  tituloH2.style.fontSize = `${inputTamanhoFonte.value}px`;
  tituloH2.style.color = inputCorFonte.value;
  tituloH2.style.textAlign = selectAlinhamento.value;
  containerMenu.style.backgroundColor = inputCorFundo.value;
}


const imagensSalvas = [];
let imagemAtual = null;

function aplicarEventosImagemMenu() {
    const imgMenuContainer = document.getElementById("img-menu");

    
    imgMenuContainer.style.display = "flex";
    imgMenuContainer.style.flexWrap = "wrap"; 
    imgMenuContainer.style.gap = "10px"; 
    imgMenuContainer.style.justifyContent = "flex-start";

    const imagemMenu = document.getElementById("imagem-menu");
    const larguraImagemMenu = document.getElementById("largura-imagem-menu");
    const alturaImagemMenu = document.getElementById("altura-imagem-menu");
    const arredondamentoImgMenu = document.getElementById("arredondamento-img-menu");
    const corBordaMenu = document.getElementById("cor-borda-menu");
    const espessuraBordaImgMenu = document.getElementById("espessura-borda-img-menu");
    const estiloBordaImgMenu = document.getElementById("input-estilo-borda-img-item");
    const btnSalvar = document.getElementById("btn-salvar-menu");
    const btnExcluir = document.getElementById("btn-excluir-menu");

    const alinhamentoImgMenu = document.getElementById("alinhamento-img-menu");
    const gapImgMenu = document.getElementById("gap-img-menu");

 
    alinhamentoImgMenu.addEventListener("change", () => {
        imgMenuContainer.style.justifyContent = alinhamentoImgMenu.value;
    });

    gapImgMenu.addEventListener("input", () => {
        imgMenuContainer.style.gap = `${gapImgMenu.value}px`;
    });

    criarNovaImagemParaEdicao();

    imagemMenu.addEventListener("input", () => {
        const file = imagemMenu.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagemAtual.src = e.target.result;
                imagemAtual.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    larguraImagemMenu.addEventListener("input", () => {
        imagemAtual.style.width = `${larguraImagemMenu.value}px`;
    });

    alturaImagemMenu.addEventListener("input", () => {
        imagemAtual.style.height = `${alturaImagemMenu.value}px`;
    });

    arredondamentoImgMenu.addEventListener("input", () => {
        imagemAtual.style.borderRadius = `${arredondamentoImgMenu.value}px`;
    });

    corBordaMenu.addEventListener("input", atualizarEstiloBorda);
    espessuraBordaImgMenu.addEventListener("input", atualizarEstiloBorda);
    estiloBordaImgMenu.addEventListener("change", atualizarEstiloBorda);

    function atualizarEstiloBorda() {
        const espessura = parseInt(espessuraBordaImgMenu.value, 10);
        if (espessura > 0) {
            imagemAtual.style.border = `${espessura}px ${estiloBordaImgMenu.value} ${corBordaMenu.value}`;
        } else {
            imagemAtual.style.border = "none";
        }
    }

    btnSalvar.addEventListener("click", () => {
        if (imagemAtual.src) {
            imagensSalvas.push(imagemAtual);
            imagemAtual = null;
            criarNovaImagemParaEdicao();
            alert("Imagem salva!");
        }
    });

    btnExcluir.addEventListener("click", () => {
        if (imagemAtual && imagemAtual.src) {
            imagemAtual.remove();
            imagemAtual = null;
            criarNovaImagemParaEdicao();
        } else if (imagensSalvas.length > 0) {
            const ultima = imagensSalvas.pop();
            ultima.remove();
        }
    });

    function criarNovaImagemParaEdicao() {
        imagemMenu.value = "";
        larguraImagemMenu.value = 100;
        alturaImagemMenu.value = 100;
        arredondamentoImgMenu.value = 0;
        corBordaMenu.value = "#000000";
        espessuraBordaImgMenu.value = 1;
        estiloBordaImgMenu.value = "solid";

        imagemAtual = document.createElement("img");
        imagemAtual.alt = "Logo do menu";
        imagemAtual.style.display = "none";
        imagemAtual.style.width = "100px";
        imagemAtual.style.height = "100px";
        imagemAtual.style.borderRadius = "0px";

        atualizarEstiloBorda();

        imgMenuContainer.appendChild(imagemAtual);
    }
}


const textosSalvos = [];
let textoAtual = null;

function aplicarEventosTextoMenu() {
    const textoMenuInput = document.getElementById("texto-menu");
    const corTextoMenuInput = document.getElementById("cor-texto-menu");
    const tamanhoFonteTextoMenuInput = document.getElementById("tamanho-fonte-texto-menu");
    const gapItemMenuInput = document.getElementById("gap-item-menu");
    const alinhamentoItemMenuSelect = document.getElementById("alinhamento-item-menu");

    const btnSalvar = document.getElementById("btn-salvar-menu");
    const btnExcluir = document.getElementById("btn-excluir-menu");

    const containerItensMenu = document.getElementById("itens-menu");

   
    containerItensMenu.style.display = "flex";
    containerItensMenu.style.flexWrap = "wrap";
    containerItensMenu.style.gap = `${gapItemMenuInput.value}px`;
    containerItensMenu.style.justifyContent = alinhamentoItemMenuSelect.value;

    criarNovoTextoParaEdicao();

   
    textoMenuInput.addEventListener("input", () => {
        if (textoAtual) {
            textoAtual.textContent = textoMenuInput.value;
        }
    });

    corTextoMenuInput.addEventListener("input", () => {
        if (textoAtual) {
            textoAtual.style.color = corTextoMenuInput.value;
        }
    });

    tamanhoFonteTextoMenuInput.addEventListener("input", () => {
        if (textoAtual) {
            textoAtual.style.fontSize = `${tamanhoFonteTextoMenuInput.value}px`;
        }
    });

    gapItemMenuInput.addEventListener("input", () => {
        containerItensMenu.style.gap = `${gapItemMenuInput.value}px`;
    });

    alinhamentoItemMenuSelect.addEventListener("change", () => {
        containerItensMenu.style.justifyContent = alinhamentoItemMenuSelect.value;
    });

    
    btnSalvar.addEventListener("click", () => {
        if (textoAtual.textContent.trim() !== "") {
            textoAtual.classList.add("item-menu");
            textoAtual.style.cursor = "pointer";
            textosSalvos.push(textoAtual);
            textoAtual = null;
            criarNovoTextoParaEdicao();
            alert("Texto salvo!");
        } else {
            alert("Digite um texto antes de salvar.");
        }
    });

    
    btnExcluir.addEventListener("click", () => {
        if (textoAtual) {
            textoAtual.remove();
            textoAtual = null;
            criarNovoTextoParaEdicao();
        } else if (textosSalvos.length > 0) {
            const ultimo = textosSalvos.pop();
            ultimo.remove();
        }
    });

    function criarNovoTextoParaEdicao() {
        textoMenuInput.value = "";
        corTextoMenuInput.value = "#000000";
        tamanhoFonteTextoMenuInput.value = 20;

        textoAtual = document.createElement("h2");
        textoAtual.textContent = "";
        textoAtual.style.fontSize = "20px";
        textoAtual.style.color = "#000";
        textoAtual.style.display = "block";
        textoAtual.style.cursor = "text"; 

        containerItensMenu.appendChild(textoAtual);
    }
}
