import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Switch, Button } from 'react-native';

export default function App() {
	const [contador, setContador] = useState(0);
	const [renderizado, setRenderizado] = useState(true);

	useEffect(() => {
		console.log('MONTOU');
	}, [contador]); // monitora o contador, a cada alteração dispara a ação do useEffect

	return (
		<View style={styles.container}>
			<Button title="➕" onPress={() => setContador(contador + 1)} />
			<Text style={{ fontSize: 30 }}>{contador}</Text>
			<Button title="➖" onPress={() => setContador(contador - 1)} />

			<Button
				title="MOSTRAR NOME"
				onPress={() => setRenderizado(!renderizado)}
			/>

			{/* caso renderizado = TRUE renderiza <Nome/> */}
			{renderizado && <Nome />}
		</View>
	);
}

const Nome = () => {
	useEffect(() => {
		console.log('COMPONENTE NOME FOI MONTADO NA TELA!');

		return () => console.log('COMPONENTE DESMONTADO'); // chamado ao componente ser desmontado (sair da tela)
	}, []);
	return <Text>Helio</Text>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
