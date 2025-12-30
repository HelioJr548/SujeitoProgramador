import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
	const [nome, setNome] = useState('Carregando...');

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
			nome: 'fulano',
			idade: '12',
			cargo: 'estudante',
		});
	}

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 24 }}>Nome: {nome}</Text>

			<Pressable style={styles.button} onPress={handleRegister}>
				<Text style={styles.buttonText}>Adicionar</Text>
			</Pressable>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#000',
	},
	buttonText: {
		padding: 8,
		color: '#fff',
	},
});
