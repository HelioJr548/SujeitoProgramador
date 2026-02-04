import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import CartProvider from './src/contexts/CartContext';

export default function App() {
	return (
		<NavigationContainer>
			<CartProvider>
				<StatusBar style="auto" />
				<Routes />
			</CartProvider>
		</NavigationContainer>
	);
}
