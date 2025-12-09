import { View, Text, Image } from 'react-native';

export default function App() {
	return (
		<View>
			<Text>Hello, World!</Text>
			<Text style={{ color: '#ff0000', fontSize: 25, margin: 15 }}>
				Olá, Mundo!
			</Text>

			<Logo largura={350} altura={350} fulano={'Helio'} />
		</View>
	);
}

function Logo(props) {
	let img = 'http://sujeitoprogramador.com/reactlogo.png';

	return (
		<View>
			<Image
				source={{
					uri: img,
				}}
				style={{ width: props.largura, height: props.altura }}
			/>
			<Text> {props.fulano} </Text>
		</View>
	);
}
