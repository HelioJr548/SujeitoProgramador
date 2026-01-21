import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type TRouteUserParams = {
	User: {
		name: string;
	};
};

type TUserRouteProps = RouteProp<TRouteUserParams, 'User'>;

export default function User() {
	const route = useRoute<TUserRouteProps>();
	return (
		<View style={styles.container}>
			<Text>Página Usuario</Text>
			<Text>{route.params.name}</Text>
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
