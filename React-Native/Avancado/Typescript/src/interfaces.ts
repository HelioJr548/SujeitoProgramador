// // Conjunto de dados (um padrão) para descrever a estrutura de um objeto
// interface ILojaProps {
// 	nome: string;
// 	endereco: string;
// 	status: boolean;
// }

// const BurguerK: ILojaProps = {
// 	nome: 'BK',
// 	endereco: 'Rua X',
// 	status: true,
// };
// console.log(BurguerK);

// function novaLoja({ nome, endereco, status }: ILojaProps): void {
// 	console.log(`Loja ${nome} criada com sucesso!`);
// 	console.log(`Endereço da loja ${endereco}`);
// 	console.log(`Status da loja ${status}`);
// }
// novaLoja({ nome: 'SB', endereco: 'Rua', status: false });

// // Interface com propriedades opcionais
// interface ICadastroProps {
// 	nome?: string;
// 	email: string;
// 	status: boolean;
// }

// const novoUsuario: ICadastroProps = {
// 	// nome: 'Helio',
// 	email: 'hjr@',
// 	status: true,
// };
// console.log(novoUsuario);

// function novoUser(usuario: ICadastroProps) {
// 	console.log(usuario.email);
// }
// novoUser({ email: 'ana@', status: false });

// // Interfaces com funções
// interface ICursoProps {
// 	id: string;
// 	nome: string;
// 	preco: number;

// 	// definir apenas a funçao e o que ela deve esperar e retornar
// 	promocao: (preco: number) => void;
// }

// function mostraPromocao(preco: number) {
// 	console.log(`Promoção no curso por apenas: R$ ${preco}`);
// }

// const novoCurso: ICursoProps = {
// 	id: '1',
// 	nome: 'Curso TS',
// 	preco: 750,
// 	promocao: mostraPromocao,
// };

// console.log(novoCurso);
// console.log(novoCurso.promocao(350));

// interface ISomaProps {
// 	(valor1: number, valor2: number): number;
// }
// let somaNumeros: ISomaProps = (valor1: number, valor2: number): number => {
// 	console.log(`Resultado: ${valor1 + valor2}`);
// 	return valor1 + valor2;
// };

// const resultado = somaNumeros(15, 10);

// console.log(`Resultado da variavel: ${resultado}`);

// // ReadOnly
// interface IProdutoProps {
// 	readonly id: string;
// 	nome: string;
// 	descricao: string;
// }

// let produto1: IProdutoProps = {
// 	id: '1',
// 	nome: 'Tenis',
// 	descricao: 'Tenis bom',
// };

// produto1.id = '123';
// console.log(produto1);

// // Array na interface
// interface ITecnologiaProps {
// 	id: string;
// 	nome: string;
// 	slug: string[];
// }

// let tecnologia1: ITecnologiaProps = {
// 	id: '1',
// 	nome: 'PHP',
// 	slug: ['php', 'php-do-zero', 'php12'],
// };

// interface ITecnologiaProps {
// 	id: string;
// 	nome: string;
// 	descricao?: string;
// }

// interface INomesProps {
// 	tecnologia: ITecnologiaProps[];
// }

// let frontend: INomesProps = {
// 	tecnologia: [
// 		{ id: '12', nome: 'ReactJS', descricao: 'Lib para criar interfaces' },
// 		{ id: '43', nome: 'VueJs' },
// 	],
// };

// console.log(frontend.tecnologia);

// // Extends
// interface IJogoProps {
// 	readonly id: string;
// 	nome: string;
// 	descricao: string;
// 	plataforma: string[];
// }

// const left4dead: IJogoProps = {
// 	id: '123',
// 	nome: 'Left 4 Dead 2',
// 	descricao: 'Jogo ação e tiro',
// 	plataforma: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
// };

// console.log(left4dead);
// interface IDLC extends IJogoProps {
// 	jogoOriginal: IJogoProps;
// 	novoConteudo: string[];
// }

// const left4deadDLC: IDLC = {
// 	id: '90',
// 	nome: 'Left 4 Dead - Novos Mapas',
// 	descricao: '4 novos mapas para jogar online',
// 	plataforma: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
// 	novoConteudo: ['Modo Coop', 'Mais 5 horas de jogo', 'Medalhas'],
// 	jogoOriginal: left4dead,
// };

// console.log(left4deadDLC);

// // Alias
// type Uuid = number | string | null;

// function acessar(uuid: Uuid, nome: string) {
// 	console.log(`ID: ${uuid} - Bem vindo ${nome}`);
// }

// function logUsuario(uuid: Uuid) {
// 	console.log(`Conta referente ao UUID: ${uuid}`);
// }

// // acessar(123, 'Helio');
// // acessar('55', 'Junior');
// // logUsuario('123');

// type Moedas = 'BRL' | 'EUR' | 'USD';
// function comprarItem(moeda: Moedas) {
// 	console.log(`Comprando com a moeda: ${moeda}`);
// }
// comprarItem('BRL');

// Intersections
type Info = {
	id: number;
	nome: string;
	descricao?: string;
};

const produtoInfo: Info = {
	id: 123,
	nome: 'Placa de Video',
	descricao: 'GTX 2090',
};

type Categoria = {
	slug: string;
	quantidadeProduto: number;
};

const categoria1: Categoria = {
	slug: 'hardware',
	quantidadeProduto: 2,
};

type ProdutoInfo = Info & Categoria; //ProdutoInfo é a intercessao (UNIAO) entre Info e Categoria

const novoProduto: ProdutoInfo = {
	id: 54321,
	nome: 'Teclado',
	slug: 'teclado-mecanico',
	quantidadeProduto: 10,
};

console.log(novoProduto);
