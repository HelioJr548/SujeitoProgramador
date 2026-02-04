import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

const About = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text>Tela ABOUT</Text>
			<Button
				title="IR PARA CONTATO"
				onPress={() => navigation.navigate('Contact')}
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

export default About;
