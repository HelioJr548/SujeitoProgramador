// function login(username: string): boolean | string {
// 	let message = `Bem vindo, ${username}`;
// 	console.log(message);

// 	return username;
// }

// const usernameLogin = login('Helio');
// console.log(usernameLogin);

// let n1: number = 10;
// let n2: number = 25;
// function soma(valor1: number, valor2: number): string {
// 	let soma = valor1 + valor2;
// 	if (soma > 20) {
// 		return 'SOMA MAIOR QUE 20';
// 	} else {
// 		return 'SOMA MENOR QUE 20';
// 	}
// }
// console.log(soma(n1, n2));

// // ARROW FUNCTIONS
// const retornoApi = (url: string): void => {
// 	console.log(`URL DA API: ${url}`);
// };
// retornoApi('https://...com.br');

// Como deixar um valor por default ou deixar ele opcional
function cadastro(
	email: string,
	senha: string,
	nome = 'Aluno',
	idade?: number
): void {
	let data = { email, senha, nome, idade };
	console.log(data);
}
cadastro('hjr@', '123');
cadastro('hjr@', '123', 'Helio', 22);

function cadastroLoja(nome: string, email: string, status = false): boolean {
	console.log(`Status atual da loja: ${status}`);
	return status;
}

cadastroLoja('BK', 'bk@store.com', true);
