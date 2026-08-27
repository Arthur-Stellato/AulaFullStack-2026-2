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