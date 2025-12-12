import { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';

export default function App() {
	const [feed, setFeed] = useState([
		{ id: '1', name: 'Helio', age: 22, email: 'hjr@' },
		{ id: '2', name: 'Maria', age: 19, email: 'maria@' },
		{ id: '3', name: 'João', age: 25, email: 'joao@' },
		{ id: '4', name: 'Ana', age: 21, email: 'ana@' },
		{ id: '5', name: 'Carlos', age: 23, email: 'carlos@' },
	]);

	const addPerson = () => {
		const newPerson = {
			id: Date.now().toString(), // ID único
			name: `Pessoa ${feed.length + 1}`,
			age: 20 + Math.floor(Math.random() * 20),
			email: `pessoa${feed.length + 1}@exemplo.com`,
		};
		setFeed([...feed, newPerson]); // ✅ Atualiza tela!
	};

	return (
		<View style={styles.container}>
			<Pressable style={styles.addButton} onPress={addPerson}>
				<Text style={styles.addButtonText}>➕ Adicionar Pessoa</Text>
			</Pressable>

			<FlatList
				data={feed}
				renderItem={({ item }) => <Person data={item} />}
				// ✅ keyExtractor: DIZ AO REACT QUAL ITEM MUDOU
				// SEM ELE: React re-renderiza TODOS os itens sempre
				// COM ELE: React atualiza só o que mudou (rápido!)
				// USAR SEMPRE quando cada item tem ID único
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.listContainer}
			/>
		</View>
	);
}

const Person = ({ data }) => {
	return (
		<View style={styles.personContainer}>
			<Text style={styles.nameText}>{data.name}</Text>
			<Text style={styles.infoText}>Idade: {data.age} anos</Text>
			<Text style={styles.infoText}>Email: {data.email}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	addButton: {
		backgroundColor: '#4CAF50',
		padding: 15,
		margin: 20,
		borderRadius: 10,
		alignItems: 'center',
	},
	addButtonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	listContainer: {
		padding: 20,
	},
	personContainer: {
		backgroundColor: 'white',
		marginBottom: 15,
		padding: 20,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	nameText: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 5,
		color: '#333',
	},
	infoText: {
		fontSize: 16,
		color: '#666',
		marginBottom: 3,
	},
});
