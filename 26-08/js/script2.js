function displayRadioValue() {

    var elemento = document.getElementsByName('gender');

    elemento.forEach(element =>{
        if(element.checked){
            document.getElementById("result").innerHTML = "Genero : "+ element.value;
        };

    });
}

function getOption() {
    let selectElement = document.querySelector('#select1');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;

}

function getCheckBox(){
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for (let i = 0; i < checkBoxes.length; i++){
        text = `${text}, ${checkBoxes[i].value}`;
    }
    document.getElementById('pri').innerHTML = text;
}