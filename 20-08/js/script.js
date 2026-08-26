// Formatação do campo CEP
const input = document.getElementById("cep");

input.addEventListener("input", function (e) {
    // Remove tudo que não é dígito
    let v = e.target.value.replace(/\D/g, "");
    // Adiciona o hífen após os 5 primeiros dígitos
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    // Limita a 9 caracteres (5 dígitos + hífen + 3 dígitos)
    e.target.value = v.substring(0, 9);
});

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
    document.getElementById("rua").disabled = false;
    document.getElementById("bairro").disabled = false;
    document.getElementById("cidade").disabled = false;
    document.getElementById("uf").disabled = false;
    document.getElementById("ibge").disabled = false;
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('ibge').value = (conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

// Função para pesquisar o CEP quando apertar o botão TAB ou ENTER
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o envio do formulário
        const cep = document.getElementById("cep").value;
        if (cep.trim() === "") {
            alert("Por favor, preencha o campo CEP.");
            return;
        }
        pesquisacep(cep);
    });
});

function pesquisacep(valor) {
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('ibge').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

            document.getElementById("rua").disabled = true;
            document.getElementById("bairro").disabled = true;
            document.getElementById("cidade").disabled = true;
            document.getElementById("uf").disabled = true;
            document.getElementById("ibge").disabled = true;
        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};