import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

type RouteDetailParams = {
	Detail: {
		name: string;
		idade: string | number;
	};
};

type DetailRouteProps = RouteProp<RouteDetailParams, 'Detail'>;

export function Detail() {
	const route = useRoute<DetailRouteProps>();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Pagina detalhes</Text>
			<Text style={styles.text}>Nome: {route.params.name}</Text>
			<Text style={styles.text}>Idade: {route.params.idade}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#000',
		marginBottom: 14,
	},
});
