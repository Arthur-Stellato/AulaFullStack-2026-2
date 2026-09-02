const alunosRegistrados = JSON.parse(localStorage.getItem("alunosRegistrados")) || [];
const listaResultados = document.getElementById("listaResultados");

function definirCorSituacao(elemento, situacao) {
    const cores = {
        APROVADO: "green",
        EXAME: "orange",
        REPROVADO: "red"
    };

    elemento.style.color = cores[situacao] || "black";
}

if (alunosRegistrados.length === 0) {
    listaResultados.textContent = "Nenhum resultado registrado.";
} else {
    alunosRegistrados.forEach((aluno, indice) => {
        const resultado = document.createElement("article");
        const titulo = document.createElement("h2");
        const notas = document.createElement("p");
        const media = document.createElement("p");
        const situacao = document.createElement("p");

        titulo.textContent = `${indice + 1}. ${aluno.nome}`;
        notas.textContent = `Notas: ${aluno.notas.join(", ")}`;
        media.textContent = `Média: ${aluno.media.toFixed(2)}`;
        situacao.textContent = `Situação: ${aluno.situacao}`;
        definirCorSituacao(situacao, aluno.situacao);

        resultado.append(titulo, notas, media, situacao);
        listaResultados.appendChild(resultado);
    });
}
