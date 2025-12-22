import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
	const larAnimada = useRef(new Animated.Value(0)).current;
	const altAnimada = useRef(new Animated.Value(50)).current;
	const opacidadeAnimada = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		Animated.sequence([
			Animated.timing(larAnimada, {
				toValue: 100,
				duration: 4000,
				useNativeDriver: false,
			}),
			Animated.timing(altAnimada, {
				toValue: 100,
				duration: 4000,
				useNativeDriver: false,
			}),
		]).start();
	}, []);

	let porcentagemLargura = larAnimada.interpolate({
		inputRange: [0, 100], //Entrada
		outputRange: ['0%', '100%'], //Vai sair de 0% até 100%
	});
	let porcentagemAltura = altAnimada.interpolate({
		inputRange: [50, 100], //Entrada
		outputRange: ['5%', '100%'], //Vai sair de 0% até 100%
	});

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.box,
					{
						width: porcentagemLargura,
						height: porcentagemAltura,
						opacity: opacidadeAnimada,
					},
				]}
			>
				{/* <Text style={styles.texto}>Carregando...</Text> */}
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
	},
	box: {
		backgroundColor: '#4169e1',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
	},
	texto: {
		textAlign: 'center',
		fontSize: 22,
		color: '#FFF',
		fontWeight: 'bold',
	},
});
