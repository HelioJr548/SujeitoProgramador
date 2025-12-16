import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text>Tela HOME</Text>
			<Button
				title="Ir para Sobre"
				onPress={() => {
					navigation.navigate('About');
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
