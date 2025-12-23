"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BurguerK = {
    nome: 'BK',
    endereco: 'Rua X',
    status: true,
};
console.log(BurguerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja ${endereco}`);
    console.log(`Status da loja ${status}`);
}
novaLoja({ nome: 'SB', endereco: 'Rua', status: false });
