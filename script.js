let vistoSelecao = 0;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let valorTotal = 0;

//cria e remove a marcação dos itens
function adicionaMarca(classeDeSelecao, itemSelecionado) {
    let encontraSelecao = document.querySelector(`.${classeDeSelecao}`);
    if(encontraSelecao !== null) {
        let iconSelecionado = encontraSelecao.querySelector('ion-icon');
        iconSelecionado.classList.add('escondido');
        encontraSelecao.classList.remove(classeDeSelecao);      
    }
    vistoSelecao = itemSelecionado.querySelector('ion-icon');
    itemSelecionado.classList.add(classeDeSelecao);
    vistoSelecao.classList.remove("escondido");
}

//pega o valor do item escolhido
function selecionaValor(produto) {
    let valor = produto.querySelector(".valor").innerHTML;
    return Number(valor);
}

//funções disparadas ao clicar
function selecionaPrato(itemSelecionado) {
    adicionaMarca('prato-selecionado', itemSelecionado);
    valorPrato = selecionaValor(itemSelecionado);
}
function selecionaBebida(itemSelecionado) {
    adicionaMarca('bebida-selecionada', itemSelecionado); 
    valorBebida = selecionaValor(itemSelecionado);
}
function selecionaSobremesa(itemSelecionado) {
    adicionaMarca('sobremesa-selecionada', itemSelecionado);
    valorSobremesa = selecionaValor(itemSelecionado);
}

//verifica se todos os itens foram esconlhidos para liberar a confirmação
function verificaSelecao() {
    const pratoSelecionado = document.querySelector(".prato-selecionado");
    const bebidaSelecionada = document.querySelector(".bebida-selecionada");
    const sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");
    const botao = document.querySelector(".botao-confirmar"); 
    const textoBotao = document.querySelector(".botao-confirmar p");

    if(pratoSelecionado !== null && bebidaSelecionada !== null  && sobremesaSelecionada !== null) {
        botao.classList.add("liberar-confirmacao");
        textoBotao.innerHTML = "Fechar pedido";
    }
}

//disparada ao clicar em Fechar Pedido
function confirmarPedido() {
    valorTotal = valorPrato + valorBebida + valorSobremesa;
    const botao = document.querySelector(".botao-confirmar");
    if(botao.classList.contains("liberar-confirmacao")) {
        const mensagem = encodeURIComponent( `Olá, gostaria de fazer o pedido: \n - Prato: moqueca \n - Bebida: suco de laranja \n - Sobremesa: doce de banana \n Valor: R$ ${valorTotal.toFixed(2)}`);
        window.open(`https://wa.me/5533988418125?text=${mensagem}`);
    }
}