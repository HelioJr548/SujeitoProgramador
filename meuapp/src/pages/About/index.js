import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const About = () => {
	const route = useRoute();
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			title:
				route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome,
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<Text>Tela About</Text>
			<Text>{route.params?.nome}</Text>
			<Text>{route.params?.email}</Text>

			<Button title="IR PARA CONTATO" onPress={() => navigation.navigate('Contact')}/>
			<Button title="Voltar Tela" onPress={() => navigation.goBack()}/>
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

export default About;
