var mediaFinal = 0;
var nomeAluno = "";
var notasAluno = [];

function media() {

    const notas = document.querySelectorAll('.notas');

    let soma = 0;

    notas.forEach(nota => {
        soma += parseFloat(nota.value) || 0;

    });

    mediaFinal = soma / notas.length;

    document.getElementById("result").innerHTML = "Média: " + mediaFinal.toFixed(2);

};

function resultado(event) {

    event.preventDefault();

    nomeAluno = document.getElementById("nomeAluno").value.trim();
    const camposNota = document.querySelectorAll('.notas');
    notasAluno = Array.from(camposNota, campo => Number(campo.value));

    if (!nomeAluno || notasAluno.some(nota => Number.isNaN(nota))) {
        document.getElementById("rst").innerHTML = "Preencha o nome e todas as notas.";
        return;
    }

    mediaFinal = notasAluno.reduce((soma, nota) => soma + nota, 0) / notasAluno.length;

    let situacao;

    if (mediaFinal > 6) {
        situacao = "APROVADO";
    } else if (mediaFinal >= 2 && mediaFinal < 6) {
        situacao = "EXAME";
    } else {
        situacao = "REPROVADO";
    }

    const aluno = {
        nome: nomeAluno,
        notas: notasAluno,
        media: mediaFinal,
        situacao: situacao
    };

    const alunosRegistrados = JSON.parse(localStorage.getItem("alunosRegistrados")) || [];
    alunosRegistrados.push(aluno);
    localStorage.setItem("alunosRegistrados", JSON.stringify(alunosRegistrados));

    window.location.href = "resultado.html";

};

function filtrarTeclas(event) {
    // Permite teclas de comando do teclado
    const teclasPermitidas = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

    // Permite ponto ou vírgula para decimais
    const caracteresDecimais = ['.', ','];

    if (teclasPermitidas.includes(event.key) || caracteresDecimais.includes(event.key)) {
        return; // Libera a tecla
    }

    // Se não for um número de 0 a 9, bloqueia a digitação
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
};