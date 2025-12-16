import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import About from './src/pages/About';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: 'Tela inicio',
						headerStyle: { backgroundColor: '#121212' },
						headerTintColor: '#fff',
						headerShown: false
					}}
				/>
				<Stack.Screen name="About" component={About} options={{
					title: 'Sobre'
				}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
