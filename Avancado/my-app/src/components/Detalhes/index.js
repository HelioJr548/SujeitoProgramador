import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Detalhes({ filme, voltar }) {
	return (
		<View style={styles.container}>
			<View style={styles.modalContainer}>
				<Pressable style={styles.btnVoltar} onPress={voltar}>
					<Text style={{ color: '#FFF', fontSize: 16 }}>Voltar</Text>
				</Pressable>

				<Text style={styles.titulo}>{filme.nome}</Text>
				<Text style={styles.sinopse}>Sinopse:</Text>
				<Text style={styles.descricao}>{filme.sinopse}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	modalContainer: {
		height: '80%',
		backgroundColor: '#000',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	btnVoltar: {
		backgroundColor: '#e52243',
		padding: 10,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	titulo: {
		textAlign: 'center',
		color: '#fff',
		padding: 10,
		fontSize: 28,
	},
	sinopse: {
		color: '#fff',
		fontSize: 18,
		marginBottom: 8,
		marginLeft: 10,
	},
	descricao: {
		color: '#fff',
		marginHorizontal: 10,
		textAlign: 'justify',
	},
});
