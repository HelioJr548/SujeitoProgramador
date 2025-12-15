import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
	const [carroSelecionado, setCarroSelecionado] = useState(0);
	const [carros, setCarros] = useState([
		{ key: 1, nome: 'Ford', valor: 62.0 },
		{ key: 2, nome: 'Chevrolet', valor: 58.0 },
		{ key: 3, nome: 'Honda', valor: 70.0 },
		{ key: 4, nome: 'Hyundai', valor: 55.0 },
		{ key: 5, nome: 'Volkswagen', valor: 68.0 },
	]);

	let carrosItem = carros.map((v, k) => {
		return <Picker.Item key={k} value={k} label={v.nome} />;
	});

	return (
		<View style={styles.container}>
			<Picker
				selectedValue={carroSelecionado}
				onValueChange={(itemValue, itemIndex) =>
					setCarroSelecionado(itemValue)
				}
			>
				{carrosItem}
			</Picker>

			<Text style={styles.carros}>
				Carro selecionado: {carros[carroSelecionado].nome}
			</Text>
			<Text style={styles.carros}>
				Valor: {carros[carroSelecionado].valor.toFixed(3)}
			</Text>
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
