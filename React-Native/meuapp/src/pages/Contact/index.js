import { StyleSheet, Text, View } from 'react-native';

const Contact = () => {
	return (
		<View style={styles.container}>
			<Text>Tela CONTACT</Text>
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
