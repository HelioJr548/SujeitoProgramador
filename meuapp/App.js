import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
	const [name, setName] = useState('Helio');
	const [age, setAge] = useState(22);

	return (
		<View style={{ marginTop: 25 }}>
			<Button
				title="Mudar Nome"
				onPress={() => {
					setName('Helio Jr');
					setAge(23);
				}}
			/>

			<Text style={{ fontSize: 20 }}>{name}</Text>
			<Text style={{ fontSize: 18 }}>{age}</Text>
		</View>
	);
}
