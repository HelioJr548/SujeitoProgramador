import { View, Text, Image } from 'react-native';

export default function App() {
	let name = 'Helio';
	let img = 'http://sujeitoprogramador.com/reactlogo.png';

	return (
		<View>
			<Text>Hello, World!</Text>
			<Text style={{ color: '#ff0000', fontSize: 25, margin: 15 }}>
				Olá, Mundo!
			</Text>

			<Image
				source={{
					uri: img,
				}}
				style={{ width: 200, height: 200 }}
			/>

			<Text style={{ fontSize: 22 }}>
        {name}
      </Text>
		</View>
	);
}
