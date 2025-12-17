import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = () => {
	const navigation = useNavigation();

	const navegaDetalhes = () => {
		// Navega para rota "Details" definida no StackRoutes
		navigation.navigate('Details'); // ← CHAMA a "rota" definida no StackRoutes
	};

	return (
		<View style={styles.container}>
			<Text>Tela HOME</Text>
			<Button title="Ir para Detalhes" onPress={navegaDetalhes} />
			<Button
				title="Abrir Drawer"
				onPress={() => {
					navigation.openDrawer();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Home;
