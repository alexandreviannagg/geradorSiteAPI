let containerAPIDados = document.getElementById("api-dados");

async function enviarDadosParaAPI(titulo, corpo) {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: titulo,
        body: corpo,
        userId: 1
      })
    });

    const dados = await resposta.json();

    

    const secaoAPI = document.createElement("div");
    secaoAPI.style.margin = "10px";
    secaoAPI.innerHTML = `
      <h3 style="color: white">Resposta da API:</h3>
      <p style="color: white"><strong>ID:</strong> ${dados.id + 1}</p>
      <p style="color: white"><strong>Título:</strong> ${dados.title}</p>
      <p style="color: white"><strong>Corpo:</strong> ${dados.body}</p>
    `;
    containerAPIDados.appendChild(secaoAPI);

  } catch (erro) {
    console.error("Erro ao enviar dados para a API:", erro);
  }
}
