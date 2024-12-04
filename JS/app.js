let contador = 0
let nomePrato
let valor2prato
let valorPrato
let nomeDrink
let valor2drink
let valorDrink
let nomeSobremesa
let valor2sobremesa
let valorSobremesa
function teste(clicado, valor, centavos){
    nomePrato = clicado
    valorPrato = valor
    valor2prato = centavos
    const selecionado = document.querySelector(".categoria1 .selecionado")


    if (selecionado !== null){
        selecionado.classList.remove("selecionado")
    }else{
        contador++
        verificarContador()
    }
    const seletor = "." + clicado
    const pratos = document.querySelector(seletor)
    pratos.classList.add("selecionado")

}

function drink(clicado, valor, centavos){
    nomeDrink = clicado
    valorDrink = valor
    valor2drink = centavos
    const selecionado = document.querySelector(".categoria2 .selecionado")


    if (selecionado !== null){
        selecionado.classList.remove("selecionado")
    }else{
        contador++
        verificarContador()
    }
    const seletor = "." + clicado
    const pratos = document.querySelector(seletor)
    pratos.classList.add("selecionado")

}

function sobreMesa(clicado, valor, centavos){
    nomeSobremesa = clicado
    valorSobremesa = valor
    valor2sobremesa = centavos
    const selecionado = document.querySelector(".categoria3 .selecionado")


    if (selecionado !== null){
        selecionado.classList.remove("selecionado")
    }else{
        contador++
        verificarContador()
    }
    const seletor = "." + clicado
    const pratos = document.querySelector(seletor)
    pratos.classList.add("selecionado")

}

function verificarContador(){
    if(contador === 3){
        continuar()
    }
}

function continuar(){
    const botao = document.querySelector('.botao')
    botao.classList.add('liberado')
    const objetivo = document.querySelector('.botao').innerHTML="Continuar"

    const item1 = document.querySelector('.prt')
    item1.innerHTML="Seu prato: " + nomePrato + " R$ " + valorPrato + "," + valor2prato
    const item2 = document.querySelector('.dri')
    item2.innerHTML="Sua bebida: " + nomeDrink + " R$ " + valorDrink + "," + valor2drink
    const item3 = document.querySelector('.sob')
    item3.innerHTML="Sua sobremesa: " + nomeSobremesa + " R$ " + valorSobremesa + "," + valor2sobremesa
}

function avancarPagina(){
    const estrutura = document.querySelector('.estrutura')
    estrutura.classList.add('hide')

    const resumo = document.querySelector('.resumo')
    resumo.classList.remove('hide')

    

}

