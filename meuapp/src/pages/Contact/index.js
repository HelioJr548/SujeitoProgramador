import { StackActions, useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

const Contact = () => {
	const navigation = useNavigation();

	const handleHome = () => {
		navigation.dispatch(StackActions.popToTop());
	};

	return (
		<View style={styles.container}>
			<Text>Tela Contact</Text>
			<Button title="VOLTAR HOME" onPress={handleHome} />
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

export default Contact;
