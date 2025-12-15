import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
	const [value, setValue] = useState(50);

	return (
		<View style={styles.container}>
			<Slider
				minimumValue={0}
				maximumValue={100}
				value={value}
				onValueChange={(selectedValue) => setValue(selectedValue)}
				minimumTrackTintColor="hsla(96, 34%, 50%, 1.00)" 
				maximumTrackTintColor="hsla(0, 100%, 73%, 1.00)"
				thumbTintColor="hsla(56, 51%, 73%, 1.00)"
			/>

			<Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20 }}>
				Selected Value: {value.toFixed(0)}
			</Text>
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
