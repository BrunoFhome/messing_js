const calcular = document.getElementById('test')


function testar() {
    const a = parseInt(document.getElementById('a').value);
    const resultado = document.getElementById('resultado');

    if(isNaN(a)){
        resultado.textContent = 'Insira um numero'
        return;
    }

    if (a % 2== 0 && a >= 0){
        resultado.textContent = `${a} é um numero PAR POSITIVO`
    } else if (a % 2==0 && a < 0) {
        resultado.textContent = `${a} é um numero PAR NEGATIVO`
    } else if (a % 2!==0 && a >= 0) {
        resultado.textContent = `${a} é um numero IMPAR POSITIVO`
    } else if (a % 2!==0 && a < 0) {
        resultado.textContent = `${a} é um numero IMPAR NEGATIVO`
    }

}
test.addEventListener('click',testar)