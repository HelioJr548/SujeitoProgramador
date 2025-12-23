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

// ReadOnly
interface IProdutoProps {
	readonly id: string;
	nome: string;
	descricao: string;
}

let produto1: IProdutoProps = {
	id: '1',
	nome: 'Tenis',
	descricao: 'Tenis bom',
};

produto1.id = '123';
console.log(produto1);
