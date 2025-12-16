import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';

export default function App() {
	const [input, setInput] = useState('');
	const [nome, setNome] = useState('');

	useEffect(() => {
		const loadData = async () => {
			await AsyncStorage.getItem('@nome').then((value) => setNome(value));
		};

		loadData();
	}, []);

	const gravaNome = async () => {
		await AsyncStorage.setItem('@nome', input);
		setNome(input);
		setInput('');
	};

	// const letrasNome = nome.length
	const letrasNome = useMemo(() => {
		console.log('Pegando qntd de letras');
		return nome.length;
	}, [nome]);

	return (
		<View style={styles.container}>
			<View style={styles.viewInput}>
				<TextInput
					style={styles.input}
					value={input}
					onChangeText={(text) => setInput(text)}
				/>

				<Pressable onPress={gravaNome}>
					<Text style={styles.botao}>➕</Text>
				</Pressable>
			</View>

			<Text style={styles.nome}>{nome}</Text>
			<Text style={styles.nome}>Possui: {letrasNome} letras</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	viewInput: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		width: '80%',
		height: 40,
		borderColor: '#000',
		borderWidth: 1,
		padding: 10,
	},
	botao: {
		backgroundColor: '#222',
		color: '#fff',
		height: 40,
		padding: 10,
		marginLeft: 4,
	},
	nome: {
		marginTop: 20,
		fontSize: 30,
	},
});
