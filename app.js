//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Declara um array para armazenar os amigos
let amigos = [];
// Função para adicionar um amigo à lista
function adicionarAmigo() {
   const input = document.querySelector("#nomeAmigo");
   const nome = input.value.trim();
   if (nome === "") {
       alert("Por favor, insira um nome.");
       return;
   }
   if (amigos.includes(nome)) {
       alert("Este nome já foi adicionado.");
       return;
   }
   amigos.push(nome);
   atualizarLista();
   input.value = ""; // Limpar o campo de entrada
}
// Função para atualizar a lista de amigos na tela
function atualizarLista() {
   let lista = document.querySelector("#listaAmigos");
   lista.innerHTML = ""; // Limpa a lista antes de recriá-la
   amigos.forEach((amigo) => {
       let item = document.createElement("li");
       item.textContent = amigo;
       lista.appendChild(item);
   });
}
// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
   if (amigos.length === 0) {
       alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
       return;
   }
   let indiceAleatorio = Math.floor(Math.random() * amigos.length);
   let amigoSorteado = amigos[indiceAleatorio];
   document.querySelector("#resultadoSorteio").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}