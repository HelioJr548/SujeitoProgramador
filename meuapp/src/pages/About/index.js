import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
	const route = useRoute();

	return (
		<View style={styles.container}>
			<Text>Tela About</Text>
			<Text>{route.params?.nome}</Text>
			<Text>{route.params?.email}</Text>
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
