function selecionaPrato(numSelecionado) {
    const opcoes = document.querySelector(`.opcoes-pratos li:nth-child(${numSelecionado})`);
    const vistoOpcao = document.querySelector(`.opcoes-pratos li:nth-child(${numSelecionado}) > ion-icon`);
    for(let i = 1; i < 4; i++) {
        let reset = document.querySelector(`.opcoes-pratos li:nth-child(${i})`);
        let resetVisto = document.querySelector(`.opcoes-pratos li:nth-child(${i}) > ion-icon`);
        
        reset.classList.remove("opcao-selecionada");
        resetVisto.classList.add("escondido");
    }
    opcoes.classList.toggle("opcao-selecionada");
    vistoOpcao.classList.toggle("escondido");
}

function selecionaBebida(numSelecionado) {
    const opcoes = document.querySelector(`.opcoes-bebidas li:nth-child(${numSelecionado})`);
    const vistoOpcao = document.querySelector(`.opcoes-bebidas li:nth-child(${numSelecionado}) > ion-icon`);
    for(let i = 1; i < 4; i++) {
        let reset = document.querySelector(`.opcoes-bebidas li:nth-child(${i})`);
        let resetVisto = document.querySelector(`.opcoes-bebidas li:nth-child(${i}) > ion-icon`);
        
        reset.classList.remove("opcao-selecionada");
        resetVisto.classList.add("escondido");
    }
    opcoes.classList.toggle("opcao-selecionada");
    vistoOpcao.classList.toggle("escondido");
}

function selecionaSobremesa(numSelecionado) {
    const opcoes = document.querySelector(`.opcoes-sobremesas li:nth-child(${numSelecionado})`);
    const vistoOpcao = document.querySelector(`.opcoes-sobremesas li:nth-child(${numSelecionado}) > ion-icon`);
    for(let i = 1; i < 4; i++) {
        let reset = document.querySelector(`.opcoes-sobremesas li:nth-child(${i})`);
        let resetVisto = document.querySelector(`.opcoes-sobremesas li:nth-child(${i}) > ion-icon`);
        
        reset.classList.remove("opcao-selecionada");
        resetVisto.classList.add("escondido");
    }
    opcoes.classList.toggle("opcao-selecionada");
    vistoOpcao.classList.toggle("escondido");
}