import { containerControles } from "../geral.js";


const btnAPI = document.getElementById("gerar-api");

btnAPI.addEventListener("click", gerarControlesAPI)

containerControles.addEventListener("click", function (event) {
    if (event.target && event.target.id === "gerar-controles-APIINTERATIVA") {
        gerarControlesAPIInterativa();
    }

    if (event.target && event.target.id === "gerar-controles-dados") {
        gerarControlesMultiplasAPIs();
    }


});

function gerarControlesAPI() {
    containerControles.innerHTML = `
        <div id="gerar-controles-api" class="container-controles">
            <button class="botoes-gerar-controles2" id="gerar-controles-APIINTERATIVA">API Interativa</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-dados">Acessar API's</button>
        </div>
    `;
}

function gerarControlesAPIInterativa() {
    containerControles.innerHTML = `
        <h3 class="titulo-editor">Editor da API</h3>
        <div id="gerar-controles-api" class="container-controles">
            <button class="botoes-gerar-controles2" id="gerar-controles-APIINTERATIVA">API Interativa</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-dados">Acessar API's</button>
        </div>

        <form id="fom-titulo">
                    <fieldset>
                        <legend>
                            Gerar previsão
                        </legend>

                        <div id="form-api-interativa" class="campo-editor">
                            <label for="input-titulo-enviar-api" class="label-style-main">Digite o titulo</label>
                            <input type="text" id="input-titulo-enviar-api" class="input-style-main" placeholder="Digite o título aqui..." />


                            <label for="input-corpo-enviar-api" class="label-style-main">Digite o corpo</label>
                            <textarea id="input-corpo-enviar-api" class="input-style-main" placeholder="Digite o corpo"></textarea>
                            <button id="enviar-api">Enviar para API</button>
                        </div>


                        
                    </fieldset>
                </form>

    `

    document.getElementById("enviar-api").addEventListener("click", (event) => {
        event.preventDefault(); // evita o reload
        const titulo = document.getElementById("input-titulo-enviar-api").value;
        const corpo = document.getElementById("input-corpo-enviar-api").value;
        enviarDadosParaAPI(titulo, corpo);
    });
}


function gerarControlesMultiplasAPIs() {
  containerControles.innerHTML = `
    <h3 class="titulo-editor">Editor de Dados das APIs</h3>
    <div class="campo-editor">
        <button id="btn-chamar-apis" class="botoes-gerar-controles2">Carregar dados de 3 APIs</button>
    </div>
  `;

  document.getElementById("btn-chamar-apis").addEventListener("click", async () => {
    const container = document.getElementById("api-dados");
    container.innerHTML = "<p>Carregando dados...</p>";

    try {
      const [jokeRes, catRes, agifyRes] = await Promise.all([
        fetch("https://v2.jokeapi.dev/joke/Any?type=single").then(res => res.json()),
        fetch("https://catfact.ninja/fact").then(res => res.json()),
        fetch("https://api.agify.io/?name=joao").then(res => res.json()),
      ]);

      container.innerHTML = `
        <div class="secao-apis">
            <h3 style="color: white">Resultado das APIs:</h3>
            <p style="color: white"><strong>Piada:</strong> ${jokeRes.joke}</p>
            <p style="color: white"><strong>Fato de Gato:</strong> ${catRes.fact}</p>
            <p style="color: white"><strong>Idade estimada para João:</strong> ${agifyRes.age} anos</p>
        </div>
      `;
    } catch (erro) {
      container.innerHTML = "<p>Erro ao carregar dados das APIs.</p>";
      console.error("Erro nas APIs:", erro);
    }
  });
}
