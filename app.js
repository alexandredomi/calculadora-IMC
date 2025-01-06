//mapeamento do elemento botao, no escopo global
const botao = document.getElementById('botao')

function calcular(){
    //mapeamento dos elementos inputs e capos de texto no escopo da funcao
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    const h2 = document.getElementById('h2')
    const pesoIdeal = document.getElementById('pesoIdeal')
    const imc = document.getElementById('imc')

    if(peso.value, altura.value == ''){
        alert('preecha todos os numeros')
    }else{
        const valorImc = (peso.value / (altura.value * altura.value)).toFixed(1)
        imc.textContent = (`${valorImc}kg/m2`)

        //variavel que recebe a classificaçao
        let classificacao = ''
        //calculo classificacao
        if(valorImc < 18.5){
            classificacao = (`BAIXO DO PESO`)
        }else if(valorImc < 24.9){
            classificacao = (`PESO NORMAL`)
        }else if(valorImc < 29.9){
            classificacao = (`EXESSO DE PESO`) 
        }else if(valorImc < 34.9){
            classificacao = (`OBESIDADE GRAU 1`) 
        }else if(valorImc < 39.9){
            classificacao = (`OBESIDADE GRAU 2`) 
        }else{
            classificacao = (`OBESIDADE MORBIDA`) 
        }
        //imprime o valor da classificacao no campo
        h2.textContent = (`${classificacao}`)

        //conver o valor da altura 
        const alturaSemPonto = Math.round(altura.value * 100)
        const valorPesoIdeal = alturaSemPonto - 105
        //imprime o valor do peso ideal no campo espesifico 
        pesoIdeal.textContent = (`${valorPesoIdeal} kg`)
    }
}

//chamada da funcao "calccular" com o "botao" 
botao.addEventListener('click', calcular)