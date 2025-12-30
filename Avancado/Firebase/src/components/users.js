import { deleteDoc, doc } from 'firebase/firestore';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { db } from '../firebaseConnection';

export function UsersList({ data }) {
	async function handleDeleteItem() {
		const docRef = doc(db, 'users', data.id);
		await deleteDoc(docRef);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.item}>Nome: {data.nome}</Text>
			<Text style={styles.item}>Idade: {data.idade}</Text>
			<Text style={styles.item}>Cargo: {data.cargo}</Text>
			<Pressable style={styles.button} onPress={handleDeleteItem}>
				<Text style={styles.buttonText}>Deletar usuário</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F0F0F0',
		padding: 8,
		borderRadius: 4,
		marginBottom: 14,
	},
	item: {
		color: '#000',
		fontSize: 16,
	},
	button: {
		backgroundColor: '#b3261e',
		alignSelf: 'flex-start',
		padding: 4,
		borderRadius: 4,
		marginTop: 16,
	},
	buttonText: {
		color: '#fff',
		paddingHorizontal: 8,
	},
});
