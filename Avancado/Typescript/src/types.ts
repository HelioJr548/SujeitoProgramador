// // Type: string
// let tecnologia: string;
// tecnologia = 'JavaScript';
// console.log(tecnologia);

// // Type: number = (int, float, hex, binary)
// let valor1: number = 10;
// valor1 = 20.9;
// let valor2: number;
// valor2 = 10;
// console.log(valor1 + valor2);

// // Type: Union
// let userId: number | string;
// userId = '123';
// console.log(typeof userId);

// // Type: boolean
// let estaAutenticado: boolean = true;
// let codeStatus: string = '';
// // Tudo que for diferente de 0, string vazia, undefined, será verdadeiro
// estaAutenticado = Boolean(codeStatus);
// console.log(estaAutenticado);

// // Type: array
// let numeros: number[];
// numeros = [1, 2, 3, 4];
// console.log(`Meus numeros: ${numeros}`);
// // let filmes: Array<string>;
// // let filmes: string[];
// // let filmes: Array<string | number>;
// let filmes: (string | number)[];
// filmes = ['Filme 1', 'Filme 2'];
// filmes.push(25);
// console.log(`Meus filmes: ${filmes}`);

// // Type: tuplas
// let aluno: [string, number];
// // aluno = ['Helio', 123, 'erro']; // reclama por não seguir ordem da tupla
// aluno = ['Helio', 123];
// aluno.push('Junior', 456);
// console.log(aluno);
// let statusPedido: [string, string, string];
// statusPedido = ['Em produção', 'Saiu para entrega', 'Pedido entregue'];
// console.log(statusPedido);

// // Type: object
// let novoUsuario: object = {
// 	nome: 'Helio',
// 	email: 'hjr@.com',
// };
// console.log(novoUsuario);

// // Type: enum
// enum DesignColors {
// 	white = '#FFF',
// 	black = '#000',
// }
// console.log(DesignColors.black);
// enum StatusPermission {
// 	ADMIN,
// 	USER,
// 	SUPPORT,
// }
// console.log(StatusPermission.ADMIN);
// console.log(StatusPermission.USER);
// console.log(StatusPermission.SUPPORT);

// // Type: NULL e UNDEFINED
// let nome: string | null;
// nome = null;
// let nomeUser; // quando não declarado tipo, padrao é undefined
// console.log(nomeUser);

// // Type: UNKNOWN
// let idPedido: any = 123;
// let totalPedido: unknown = 15;
// let entregador: number = idPedido;
// // valor do tipo unknown só podem ser atribuidos ao tipo unknown ou any
// let totalEntrega: number = totalPedido;
// console.log(entregador);

// Type: Assertions
let statusAtual: unknown = 1;
let mudaStatus: number = 0;
// Afirmando que o statusAtual é de fato um numero
mudaStatus = statusAtual as number;
// Outra  maneira de afirmar o tipo
mudaStatus = <number>statusAtual;
console.log(mudaStatus);

let query: unknown = 'pizza';
let searchTerm: string = query as string;
console.log(`Search TERM: ${searchTerm}`);
