import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function App() {
	const [name, setName] = useState('');
	const [input, setInput] = useState('');

	function entrar() {
		if (!input) {
			alert('Por favor, digite seu nome!');
			setName('');
			return;
		}
		setName(`Bem vindo ${input}`);
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Digite seu nome"
				onChangeText={(text) => setInput(text)}
			/>

			<Button title="Entrar" onPress={entrar} />

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
