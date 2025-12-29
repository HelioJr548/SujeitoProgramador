import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './src/firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

export default function App() {
	const [nome, setNome] = useState('Carregando...');

	useEffect(() => {
		async function getDados() {
			const docRef = doc(db, 'users', '1');

			await getDoc(docRef)
				.then((snapshot) => {
					setNome(snapshot.data()?.nome);
				})
				.catch((err) => {
					console.log(`ERROR: ${err}`);
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
