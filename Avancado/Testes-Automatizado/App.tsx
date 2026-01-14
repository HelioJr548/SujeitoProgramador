import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
	const [counter, setCounter] = useState(0);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>App Contador</Text>

			<View style={styles.counterArea}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => setCounter(counter - 1)}
				>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>

				<Text testID="counter" style={{ fontSize: 18 }}>
					{counter}
				</Text>

				<TouchableOpacity
					style={styles.button}
					onPress={() => setCounter(counter + 1)}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
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
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 14,
	},
	counterArea: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 14,
		marginVertical: 14,
	},
	button: {
		backgroundColor: '#1f76e7',
		padding: 14,
		borderRadius: 8,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
	},
});
