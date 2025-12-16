import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Switch, Button } from 'react-native';

export default function App() {
	const [contador, setContador] = useState(0);

	useEffect(() => {
		console.log('MONTOU');
	}, [contador]); // monitora o contador, a cada alteração dispara a ação do useEffect

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
