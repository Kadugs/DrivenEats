let vistoSelecao;

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

function selecionaPrato(itemSelecionado) {
    adicionaMarca('prato-selecionado', itemSelecionado);  
}
function selecionaBebida(itemSelecionado) {
    adicionaMarca('bebida-selecionada', itemSelecionado);  
}
function selecionaSobremesa(itemSelecionado) {
    adicionaMarca('sobremesa-selecionada', itemSelecionado);  
}


///usar algo = valor.innerHTML p pegar o valor

function verificaSelecao() {
    const pratoSelecionado = document.querySelector(".prato-selecionado");
    const bebidaSelecionada = document.querySelector(".bebida-selecionada");
    const sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");
    const botao = document.querySelector(".botao-confirmar"); 
    const textoBotao = document.querySelector(".botao-confirmar p");

    if(pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        botao.classList.add("liberar-confirmacao");
        textoBotao.innerHTML = "Fechar pedido";
    }
}

function confirmarPedido() {
    const botao = document.querySelector(".botao-confirmar");
    if(botao.classList.contains("liberar-confirmacao")) {
        const mensagem = encodeURIComponent( `Olá, gostaria de fazer o pedido: \n - Prato: moqueca \n - Bebida: suco de laranja \n - Sobremesa: doce de banana \n Valor 300`);
        window.open(`https://wa.me/5533988538985?text=${mensagem}`);
    }
}