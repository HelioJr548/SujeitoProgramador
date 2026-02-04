import { Button, StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { decrease } from '../utils/math';

type TRouteUserParams = {
	User: {
		name: string;
	};
};

type TUserRouteProps = RouteProp<TRouteUserParams, 'User'>;

export default function User() {
	const route = useRoute<TUserRouteProps>();

	function handleCalculate(n1: number, n2: number) {
		const soma = n1 + n2;
		console.log(soma);
		return soma;
	}

	return (
		<View style={styles.container}>
			<Text>Página Usuario</Text>
			<Text>{route.params.name}</Text>

			<Button title="Diminuir" onPress={() => decrease(10, 20)} />

			<Button title="Calcular" onPress={() => handleCalculate(10, 20)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
