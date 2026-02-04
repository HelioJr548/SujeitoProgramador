import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<StatusBar style="auto" />
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	);
}
