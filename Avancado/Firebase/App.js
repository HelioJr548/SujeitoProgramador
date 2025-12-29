import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './src/firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

export default function App() {
	const [nome, setNome] = useState('Carregando...');

	useEffect(() => {
		async function getDados() {
			onSnapshot(doc(db, 'users', '1'), (doc) => {
				setNome(doc.data()?.nome);
			});
		}

		getDados();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 24 }}>Nome: {nome}</Text>
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
});
