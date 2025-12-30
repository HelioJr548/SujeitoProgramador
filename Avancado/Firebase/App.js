import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { db } from './src/firebaseConnection';
import { useEffect, useState } from 'react';
import {
	addDoc,
	collection,
	doc,
	getDoc,
	onSnapshot,
	setDoc,
} from 'firebase/firestore';

export default function App() {
	const [nome, setNome] = useState('');
	const [idade, setIdade] = useState('');
	const [cargo, setCargo] = useState('');

	const [showForm, setShowForm] = useState(true);

	// useEffect(() => {
	// 	async function getDados() {
	// 		onSnapshot(doc(db, 'users', '1'), (doc) => {
	// 			setNome(doc.data()?.nome);
	// 		});
	// 	}

	// 	getDados();
	// }, []);

	async function handleRegister() {
		await addDoc(collection(db, 'users'), {
			nome: nome,
			idade: idade,
			cargo: cargo,
		})
			.then(() => {
				console.log('CADASTRADO COM SUCESSO');
				setNome('');
				setIdade('');
				setCargo('');
			})
			.catch((err) => {
				console.log(`ERRO: ${err}`);
			});
	}

	function handleToggle() {
		setShowForm(!showForm);
	}

	return (
		<View style={styles.container}>
			{showForm && (
				<View>
					<Text style={styles.label}>Nome:</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite seu  nome"
						onChangeText={(text) => setNome(text)}
					/>

					<Text style={styles.label}>Idade:</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite sua idade"
						keyboardType="numeric"
						onChangeText={(text) => setIdade(text)}
					/>

					<Text style={styles.label}>Cargo:</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite seu cargo"
						onChangeText={(text) => setCargo(text)}
					/>

					<Pressable style={styles.button} onPress={handleRegister}>
						<Text style={styles.buttonText}>Adicionar</Text>
					</Pressable>
				</View>
			)}

			<View>
				<Pressable style={{ marginTop: 8 }} onPress={handleToggle}>
					<Text style={{ textAlign: 'center', color: '#000' }}>
						{showForm
							? 'Esconder formulário'
							: 'Mostrar formulário'}
					</Text>
				</Pressable>
				<StatusBar style="auto" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		flex: 1,
		backgroundColor: '#fff',
	},
	button: {
		backgroundColor: '#000',
		marginHorizontal: 8,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
		padding: 8,
		color: '#fff',
	},
	label: { fontSize: 24, color: '#000', marginBottom: 4, marginLeft: 8 },
	input: {
		borderWidth: 1,
		marginHorizontal: 8,
		marginBottom: 8,
		borderRadius: 5,
	},
});
