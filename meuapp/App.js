import { useState } from 'react';
import { View, Text } from 'react-native';

export default function App() {
	return (
		<View style={{ paddingTop: 40, flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>
			<View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
			<View style={{ height: 50, backgroundColor: 'blue' }}></View>
			<View style={{ height: 50, backgroundColor: 'red' }}></View>
		</View>
	)
}
