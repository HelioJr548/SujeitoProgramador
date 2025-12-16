import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Switch, Button } from 'react-native';

export default function App() {
	const [contador, setContador] = useState(0);

	useEffect(() => {
		console.log('MONTOU');

		setTimeout(() => {
			setContador(350);
		}, 2000);
	}, []); // [] vazio quer dizer que ira chamar a função assim que o app for montado em tela (uma unica vez)

	return (
		<View style={styles.container}>
			<Button title="➕" onPress={() => setContador(contador + 1)} />
			<Text style={{ fontSize: 30 }}>{contador}</Text>
			<Button title="➖" onPress={() => setContador(contador - 1)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
