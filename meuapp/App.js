import { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

export default function App() {
	const [status, setStatus] = useState(false);

	return (
		<View style={styles.container}>
			<Switch
				value={status}
				onValueChange={(value) => setStatus(value)}
				trackColor={{ false: '#121212', true: '#00ff00' }}
				thumbColor={status ? '#121212' : '#f4f4f4'}
			/>

			<Text>Status: {status ? 'On' : 'Off'}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
});
