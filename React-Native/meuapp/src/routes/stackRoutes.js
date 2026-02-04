import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HOME"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			{/* name do Stack é referencia para a chamada do .navigate() em ../pages/Home */}
			{/* "Rota" que o navigation.navigate('Details') chama */}
			<Stack.Screen name="Details" component={Details} />
		</Stack.Navigator>
	);
};

export default StackRoutes;
