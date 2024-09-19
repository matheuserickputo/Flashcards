function criaCartão(categoria,pergunta,resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `<div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div class="pergunta-cartao">
    <h3>${pergunta}</h3>
    <div class="resposta-cartao">
    <h3>${resposta}</h3>
    </div>
    </div>`
}