//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const nomes = [];

function adicionarAmigo() {
    
    const input = document.getElementById('nomeInput');
    const nome = input.value.trim();
    if (nome && !nomes.includes(nome)) {
        nomes.push(nome);
        atualizarLista();
        input.value = '';
        limparCampo();
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaNomes');
    lista.innerHTML = '';
    nomes.forEach(nome => {
        const lista = document.createElement('listaNomes');
        lista.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert('Adicione pelo menos dois nomes!');
        return;
    }
    // Embaralha os nomes
    const embaralhados = [...nomes].sort(() => Math.random() - 0.5);
    let resultado = '';
    for (let i = 0; i < embaralhados.length; i++) {
        const amigo = embaralhados[(i + 1) % embaralhados.length];
        resultado += `${embaralhados[i]} -> ${amigo}\n`;
    }
    alert(resultado);
}

// Eventos dos botões
document.getElementById('adicionarBtn').addEventListener('click', adicionarAmigo);
document.getElementById('sortearBtn').addEventListener('click', sortearAmigo);