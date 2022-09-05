<h1>Validador CPF (Cadastro de Pessoas Físicas)</h1>

<p>Este verificador de cadastro de pessoa física foi elaborado durante as aulas de JavaScript do Hiring Coders#3 em parceria com a plataforma Gama Academy.</p>
<p>Primeiramente é feita uma verificação de condição se o CPF digitado é diferente de 11 dígitos.</p>

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

<p>Caso não a verificação segue separando os 9 primeiros números dos 2 restantes dígitos e também é feito o retorno da posição de cada string dos números do cpf e somatória dos mesmos.</p>
<br />
<p>Após isso verificamos se a sobra da divisão entre a <code>soma % 11</code> é menor que 2. Caso for atribui-se o valor 0 para o resultado e caso não atribui-se o resultado de <code>soma % 11</code>.</p>

    var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
<br />
<HR />

<h2>Validando o primeiro dígito</h2>
<br />

<p>Com o resultado definido já se pode fazer a validação do primeiro dígito que é da seguinte forma:</p>

    if (resultado != digitos.charAt(0)) {
        return false
    }
<br />
<HR />

<h2>Validando o segundo dígito</h2>
<br />
<p>Agora com o primeiro dígito validado, partimos para o segundo que segue algo bem semelhante. Se trata da somatória dos 9 números iniciais e o primeiro dígito também como se pode observar abaixo:</p>

    soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

Obtento o resultado da soma, faz-se uma operação ternária verificando se <code>soma > 2 </code> atribui-se 0 ao resultado e se não for atribui <code>soma % 11</code>.

<P>Seguindo com a validação abaixo que verifica se o resultado adquirido é diferente do segundo índice dos dígitos:</P>

    if (resultado != digitos.charAt(1)) {
            return false
    }

Assim terminando a validação seguindo com a apresentação do resultado no client-side.