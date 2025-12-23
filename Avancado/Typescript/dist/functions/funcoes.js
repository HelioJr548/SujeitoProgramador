"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    const valorTotal = vendas.reduce((acc, v) => acc + v, 0);
    console.log(`Você fez ${quantidadeVendas} vendas hoje!. No valor total de R$ ${valorTotal}`);
}
totalVendas(10, 30, 25);
function mostraNomes(...nomeUser) {
    nomeUser.map((nome) => console.log(nome));
}
mostraNomes('Helio', 'Davi', 'Mathues');
