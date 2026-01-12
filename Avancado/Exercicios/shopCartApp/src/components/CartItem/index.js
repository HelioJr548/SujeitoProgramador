import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CartItem({ data, addAmount, removeAmount }) {
	const [amount, setAmount] = useState(data?.amount);

	function handleIncrease() {
		addAmount();
		setAmount((item) => item + 1);
	}
	function handleDecrease() {
		removeAmount();

		if (amount === 0) {
			setAmount(0);
			return;
		}
		setAmount((item) => item - 1);
	}

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>{data.name}</Text>
				<Text style={styles.price}>R$ {data.price}</Text>
			</View>

			<View style={styles.amountContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={handleDecrease}
				>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>

				<Text style={styles.amount}>{amount}</Text>

				<TouchableOpacity
					style={styles.button}
					onPress={handleIncrease}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: '#DFDFDF',
		borderRadius: 2,
		marginBottom: 14,
		padding: 8,
	},
	title: { fontWeight: 'bold', fontSize: 18 },
	price: { fontSize: 16 },
	amountContainer: {
		marginVertical: 14,
		flexDirection: 'row',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#168fff',
		padding: 6,
		paddingHorizontal: 14,
		borderRadius: 2,
	},
	amount: {
		marginHorizontal: 14,
	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 16,
	},
});
