console.log('Javascript Carregado');

function validaCPF(cpf) {
    //console.log('cpf.length');
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);

        //Exemplo de operação ternária, faz uma pergunta e valida na operação
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //Validação do primeiro dígito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        //Validação do segundo dígito
        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
        console.log(digitos.charAt(0) + 'é a primeira posicao da variavel soma');
    }
}

//Função de exibição
function validacao() {
    console.log('Inciando Validação de CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;
    var resultadoValidacao = validaCPF(cpf);
    if (resultadoValidacao) {
        //uma forma de chamar estilo do bootstrap (exibe uma bar em sucess - verde ou error vermelha)
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}