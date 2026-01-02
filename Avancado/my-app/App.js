import { Text, View } from 'react-native';
import { Container, Nome, Titulo, BotaoSujeito, BotaoText } from './src/styles';

export default function App() {
	return (
		<Container>
			<Titulo cor="#ff0000">Sujeito Programador</Titulo>
			<Nome tamanho={20}>olá, Helio</Nome>

			<BotaoSujeito onPress={() => alert('Clicou')}>
				<BotaoText>Entrar</BotaoText>
			</BotaoSujeito>
		</Container>
	);
}
