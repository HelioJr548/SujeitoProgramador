// Conjunto de dados (um padrão) para descrever a estrutura de um objeto
interface ILojaProps {
	nome: string;
	endereco: string;
	status: boolean;
}

const BurguerK: ILojaProps = {
	nome: 'BK',
	endereco: 'Rua X',
	status: true,
};
console.log(BurguerK);

function novaLoja({ nome, endereco, status }: ILojaProps): void {
	console.log(`Loja ${nome} criada com sucesso!`);
	console.log(`Endereço da loja ${endereco}`);
	console.log(`Status da loja ${status}`);
}
novaLoja({ nome: 'SB', endereco: 'Rua', status: false });
