import { StyleSheet, Text, View } from 'react-native';

const Person = ({ data }) => {
	return (
		<View style={styles.personContainer}>
			<Text style={styles.nameText}>{data.name}</Text>
			<Text style={styles.infoText}>Idade: {data.age} anos</Text>
			<Text style={styles.infoText}>Email: {data.email}</Text>
		</View>
	);
};

export default Person;

const styles = StyleSheet.create({
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
