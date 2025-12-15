import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
	const [carroSelecionado, setCarroSelecionado] = useState();

	return (
		<View style={styles.container}>
			<Picker
				selectedValue={carroSelecionado}
				onValueChange={(itemValue, itemIndex) =>
					setCarroSelecionado(itemValue)
				}
			>
				<Picker.Item key={0} value={0} label="Ford" />
				<Picker.Item key={1} value={1} label="Chevrolet" />
				<Picker.Item key={2} value={2} label="Fiat" />
			</Picker>

			<Text style={styles.carros}>Carro selecionado: {carroSelecionado}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	carros: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 20,
	},
});
