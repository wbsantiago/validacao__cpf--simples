function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;

            // charAt retorna a posição da string na lista de caracteres do cpf
        }

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        // Validação do primeiro dígito abaixo!
        if (resultado != digitos.charAt(0)) {
            return false
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        // Validação do segundo dígito abaixo!
        if (resultado != digitos.charAt(1)) {
            return false
        }

        return true
        /*console.log(digitos.toString().charAt(0) + " é a primeira posição da variável soma") <--- testando soma*/
    }
}

function validacao() {

    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'none'

    var cpf = document.getElementById('form').value
    var resultadoValidacao = validaCPF(cpf)
    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block'
    } else {
        document.getElementById('error').style.display = 'block'
    }
}