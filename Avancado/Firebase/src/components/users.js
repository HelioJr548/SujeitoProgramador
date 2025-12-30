import { StyleSheet, Text, View } from 'react-native';

export function UsersList({ data }) {
	return (
		<View style={styles.container}>
			<Text style={styles.item}>Nome: {data.nome}</Text>
			<Text style={styles.item}>Idade: {data.idade}</Text>
			<Text style={styles.item}>Cargo: {data.cargo}</Text>
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
});
