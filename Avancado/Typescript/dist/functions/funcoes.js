"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cadastro(email, senha, nome = 'Aluno', idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro('hjr@', '123');
cadastro('hjr@', '123', 'Helio', 22);
function cadastroLoja(nome, email, status = false) {
    console.log(`Status atual da loja: ${status}`);
    return status;
}
cadastroLoja('BK', 'bk@store.com', true);
