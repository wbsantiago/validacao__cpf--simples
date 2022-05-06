function validaCPF() {
    return true
}

function validacao() {
    var form = document.getElementById('form').value
    var resultadoValidacao = validaCPF(cpf)
        if (resultadoValidacao) {
            document.getElementById('sucess').style.display = 'block'
        } else {
            document.getElementById('error').style.display = 'block'
        }
}

//var cpf = Number(form)