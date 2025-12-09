import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
	const [name, setName] = useState('');

	function getName(text) {
		text.length > 0 ? setName(`Bem vindo ${text}`) : setName('');
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Digite seu nome"
				onChangeText={(text) => getName(text)}
			/>

			<Text style={styles.text}>{name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		flex: 1,
	},
	input: {
		height: 45,
		borderWidth: 1,
		margin: 10,
		padding: 10,
		fontSize: 20,
		borderRadius: 10,
	},
	text: {
		textAlign: 'center',
		fontSize: 25,
	},
});
