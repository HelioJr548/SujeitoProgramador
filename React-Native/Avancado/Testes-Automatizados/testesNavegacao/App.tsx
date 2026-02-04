import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Profile from './src/Profile';
import User from './src/User';
import Contato from './src/Contato';

const Stack = createNativeStackNavigator<TStackParamList>();

export type TStackParamList = {
	Home: undefined;
	Profile: undefined;
	User: { name: string };
	Contato: { telefone: string };
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="User" component={User} />
				<Stack.Screen name="Contato" component={Contato} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
