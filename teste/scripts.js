const soma = document.getElementById('soma');
const mult = document.getElementById('mult');

function somar(){

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultado = document.getElementById('resultado');

    if(num1 !== '' && num2 !== ''){
        const valorSoma = (num1 + num2);

        resultado.textContent = `A soma é de ${valorSoma}`

    } else{
        resultado.textContent = 'Preencha todos os campos'
    }

}

function multiplicar(){

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultado = document.getElementById('resultado');

    if(num1 !== '' && num2 !== ''){
        const valorMult = (num1 * num2);

        resultado.textContent = `A Mult é de ${valorMult}`
    } else{
        resultado.textContent = 'Preencha todos os campos'
    }

}


soma.addEventListener('click',somar)

mult.addEventListener('click',multiplicar)