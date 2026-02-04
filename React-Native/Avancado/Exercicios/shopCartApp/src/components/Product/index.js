import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Product({ data, addToCart }) {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>{data.name}</Text>
				<Text style={styles.price}>R$ {data.price}</Text>
			</View>

			<TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
				<Text style={styles.buttonText}>+</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: '#dfdfdf',
		borderRadius: 2,
		marginBottom: 14,
		paddingHorizontal: 8,
		paddingVertical: 14,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontWeight: 'bold',
	},
	buttonAdd: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		backgroundColor: '#168fff',
		borderRadius: 2,
	},
});
