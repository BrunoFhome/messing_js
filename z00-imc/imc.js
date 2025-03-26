const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura*altura)).toFixed(2)
        
        let classificacao = '';

        if (valorIMC < 15){
            classificacao = 'Abaixo do peso';
        } else if (valorIMC < 20){
            classificacao = 'Peso ideal';
        } else if (valorIMC < 25){
            classificacao = 'Acima do peso';
        } else {
            classificacao = 'Obesidade'
        }

        resultado.textContent = `${nome}, seu IMC é igual a: ${valorIMC} e você esta ${classificacao}`

    } else{
        resultado.textContent = 'Preencha todos os campos'
    }

}

calcular.addEventListener('click',imc)

