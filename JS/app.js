let contador = 0
let nomePrato
let valorPrato
let nomeDrink
let valorDrink
let nomeSobremesa
let valorSobremesa
function teste(clicado, valor, centavos){
    nomePrato = clicado
    valorPrato = valor
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
    item1.innerHTML="Seu prato: " + nomePrato + " R$ " + valorPrato;
    const item2 = document.querySelector('.dri')
    item2.innerHTML="Sua bebida: " + nomeDrink + " R$ " + valorDrink;
    const item3 = document.querySelector('.sob')
    item3.innerHTML="Sua sobremesa: " + nomeSobremesa + " R$ " + valorSobremesa;
}

function avancarPagina(){
    const estrutura = document.querySelector('.estrutura')
    estrutura.classList.add('hide')

    const resumo = document.querySelector('.resumo')
    resumo.classList.remove('hide')
}

function direcionarProWhatsapp() {
    let total = valorPrato + valorDrink + valorSobremesa
    let numero = "5511949472627";
    let mensagem = "Olá, gostaria de confirmar meu pedido: ";
    let mensagemConcatenada = encodeURIComponent(mensagem)
     +  nomePrato + " R$" + valorPrato + ", " + nomeDrink + " R$" + valorDrink + ", " + nomeSobremesa + " R$" + valorSobremesa + ", " + " Total: R$" + total;

    let urlWhatsApp = "https://wa.me/" + 11949472627 + "?text=" + mensagemConcatenada;
    window.open(urlWhatsApp, "_blank");
}