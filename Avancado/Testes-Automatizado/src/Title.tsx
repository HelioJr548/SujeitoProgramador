import { StyleSheet, Text } from 'react-native';

export default function Title({ title }: { title: string }) {
	return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		color: '#ff0000',
		marginBottom: 20,
	},
});
