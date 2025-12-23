"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novoUsuario = {
    email: 'hjr@',
    status: true,
};
console.log(novoUsuario);
function novoUser(usuario) {
    console.log(usuario.email);
}
novoUser({ email: 'ana@', status: false });
