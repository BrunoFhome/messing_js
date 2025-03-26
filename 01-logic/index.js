const calcular = document.getElementById('test')


function testar() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);
    const resultado = document.getElementById('resultado');

    const soma = (a + b);

    resultado.textContent = `A soma é ${soma}`

    if (soma === c){
        resultado.textContent = `A soma: ${soma} bate com ${c}`
    } else {
        resultado.textContent = `A soma: ${soma} não bate com ${c}`
    }

}

test.addEventListener('click',testar)