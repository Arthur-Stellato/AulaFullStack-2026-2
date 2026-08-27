var mediaFinal = 0;

function media() {

    const notas = document.querySelectorAll('.notas');

    let soma = 0;

    notas.forEach(nota => {
        soma += parseFloat(nota.value) || 0;

    });

    mediaFinal = soma / notas.length;

    document.getElementById("result").innerHTML = "Média: " + mediaFinal.toFixed(2);

};

function resultado() {

    const rst = document.getElementById("rst");

    if (mediaFinal > 2 && mediaFinal < 6) {
        rst.innerHTML = "ENXAME";
        rst.style.color = "orange";
    }
    else if (mediaFinal >= 6) {
        rst.innerHTML = "APROVADO";
        rst.style.color = "green";
    } else {
        rst.innerHTML = "REPROVADO";
        rst.style.color = "red";
    }


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