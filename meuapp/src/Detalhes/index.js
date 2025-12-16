import { Button, StyleSheet, Text, View } from 'react-native';

const Detalhes = ({ fechar }) => {
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<Text style={styles.titulo}>SEJA BEM VINDO!</Text>
				<Button title="Fechar" onPress={fechar} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// margin: 15,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	modal: {
		backgroundColor: '#292929',
		width: '100%',
		height: 350,
		borderRadius: 15,
	},
	titulo: {
		fontSize: 25,
		color: '#fff',
		textAlign: 'center',
		padding: 20,
	},
});

export default Detalhes;
