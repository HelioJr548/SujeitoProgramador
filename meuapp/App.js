import { useState } from 'react';
import { View, Text } from 'react-native';

export default function App() {
	return (
		<View style={{
			paddingTop: 40, flex: 1, 
			flexDirection: 'collumn',
			justifyContent: 'flex-start',
			alignItems: 'flex-end'
		}}>
			<View style={{ height: 50, width: 50, backgroundColor: '#333' }}></View>
			<View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
			<View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
		</View>
	);
};

