let numerosSorteados = [];
const botao = document.getElementById('btn');
const listDiv = document.getElementById('list')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let sorteado;
    
    do {// gera um número até encontrar um que não esteja no array
        sorteado = Math.floor(Math.random() * (max - min) + min);
    } while (numerosSorteados.includes(sorteado)); // verifica se o número já foi sorteado

    numerosSorteados.push(sorteado); // adiciona o número à array
    console.log(numerosSorteados); //  array atualizado no console
    updateList();
};

function updateList() {
    listDiv.innerHTML = ''; // limpa a lista atual no HTML, se não irá gerar listas duplicadas

    numerosSorteados.forEach(num => {
        const item = document.createElement('p');
        item.textContent = `${num} |`;
        listDiv.appendChild(item);
    });
}

botao.addEventListener('click', function() {// chama função
    getRandomInt(0, 50); 
});