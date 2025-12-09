import { useState } from 'react';
import { View, Text } from 'react-native';

export default function App() {
	return (
		<View style={{ paddingTop: 40, backgroundColor: 'blue', flex: 1 }}>
			<View style={{ height: 65, backgroundColor: '#333' }}></View>
			<View style={{ flex: 1, backgroundColor: '#ddd', }}></View>
			<View style={{ height: 65, backgroundColor: '#333', }}></View>
		</View>
	);
};

