import { Text, View } from 'react-native';
import styled from 'styled-components';

export default function App() {
	return (
		<Container>
			<Titulo>Sujeito Programador</Titulo>
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #ff0000;
`;

const Titulo = styled.Text`
	color: #fff;
	font-size: 25px;
`;
