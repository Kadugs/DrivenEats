function selecionaPrato(numSelecionado) {
    const opcoes = document.querySelector(`.opcoes-pratos li:nth-child(${numSelecionado})`);
    const vistoOpcao = document.querySelector(`.opcoes-pratos li:nth-child(${numSelecionado}) > ion-icon`);
    for(let i = 1; i < 4; i++) {
        let reset = document.querySelector(`.opcoes-pratos li:nth-child(${i})`);
        let resetVisto = document.querySelector(`.opcoes-pratos li:nth-child(${i}) > ion-icon`);
        
        reset.classList.remove("prato-selecionado");
        resetVisto.classList.add("escondido");
    }
    opcoes.classList.toggle("prato-selecionado");
    vistoOpcao.classList.toggle("escondido");
}

function selecionaBebida(numSelecionado) {
    const opcoes = document.querySelector(`.opcoes-bebidas li:nth-child(${numSelecionado})`);
    const vistoOpcao = document.querySelector(`.opcoes-bebidas li:nth-child(${numSelecionado}) > ion-icon`);
    for(let i = 1; i < 4; i++) {
        let reset = document.querySelector(`.opcoes-bebidas li:nth-child(${i})`);
        let resetVisto = document.querySelector(`.opcoes-bebidas li:nth-child(${i}) > ion-icon`);
        
        reset.classList.remove("bebida-selecionada");
        resetVisto.classList.add("escondido");
    }
    opcoes.classList.toggle("bebida-selecionada");
    vistoOpcao.classList.toggle("escondido");
}

function selecionaSobremesa(numSelecionado) {
    const opcoes = document.querySelector(`.opcoes-sobremesas li:nth-child(${numSelecionado})`);
    const vistoOpcao = document.querySelector(`.opcoes-sobremesas li:nth-child(${numSelecionado}) > ion-icon`);
    for(let i = 1; i < 4; i++) {
        let reset = document.querySelector(`.opcoes-sobremesas li:nth-child(${i})`);
        let resetVisto = document.querySelector(`.opcoes-sobremesas li:nth-child(${i}) > ion-icon`);
        
        reset.classList.remove("sobremesa-selecionada");
        resetVisto.classList.add("escondido");
    }
    opcoes.classList.toggle("sobremesa-selecionada");
    vistoOpcao.classList.toggle("escondido");
}
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
        const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido: \\n
                        - Prato: moqueca
                        - Bebida: suco de laranja
                        - Sobremesa: doce de banana
                          Valor 300`);
        window.location.href = `https://wa.me/5533988538985?text=${mensagem}`;
    }
}