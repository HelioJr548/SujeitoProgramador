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

// Type: array
let numeros: number[];
numeros = [1, 2, 3, 4];
console.log(`Meus numeros: ${numeros}`);
// let filmes: Array<string>;
// let filmes: string[];
// let filmes: Array<string | number>;
let filmes: (string | number)[];
filmes = ['Filme 1', 'Filme 2'];
filmes.push(25);
console.log(`Meus filmes: ${filmes}`);
