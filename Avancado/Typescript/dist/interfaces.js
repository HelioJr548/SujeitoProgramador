"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const left4dead = {
    id: '123',
    nome: 'Left 4 Dead 2',
    descricao: 'Jogo ação e tiro',
    plataforma: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
};
console.log(left4dead);
const left4deadDLC = {
    id: '90',
    nome: 'Left 4 Dead - Novos Mapas',
    descricao: '4 novos mapas para jogar online',
    plataforma: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
    novoConteudo: ['Modo Coop', 'Mais 5 horas de jogo', 'Medalhas'],
    jogoOriginal: left4dead,
};
console.log(left4deadDLC);
