import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type TRouteContatoParams = {
	Contato: {
		telefone: string;
	};
};

type TContatoRouteProps = RouteProp<TRouteContatoParams, 'Contato'>;

export default function Contato() {
	const route = useRoute<TContatoRouteProps>();
	return (
		<View style={styles.container}>
			<Text>Página Contato</Text>
			<Text>{route.params.telefone}</Text>
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
