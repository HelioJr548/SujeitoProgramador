import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';

const Tab = createBottomTabNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarHideOnKeyboard: true, // Esconde tabs ao abrir keyboard
					tabBarShowLabel: false, // Mostra somente icone das tabs
					tabBarActiveTintColor: 'hsla(0, 0%, 100%, 1.00)', // Cor da tab selecionada
					tabBarInactiveTintColor: 'hsla(0, 0%, 59%, 1.00)', // Cor da tab não selecionada
					tabBarStyle: {
						backgroundColor: '#333',
						borderTopWidth: 0,
						borderColor: '#ff0000',
					},
				}}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						// tabBarLabel: 'INICIO',
						tabBarIcon: ({ color, size }) => {
							return (
								<Feather
									name="home"
									color={color}
									size={size}
								/>
							);
						},
					}}
				/>
				<Tab.Screen
					name="About"
					component={About}
					options={{
						tabBarIcon: ({ color, size }) => {
							return (
								<Feather
									name="file-text"
									color={color}
									size={size}
								/>
							);
						},
					}}
				/>

				<Tab.Screen
					name="Contact"
					component={Contact}
					options={{
						// headerShown: false,
						tabBarIcon: ({ color, size }) => {
							return (
								<Feather
									name="phone-call"
									color={color}
									size={size}
								/>
							);
						},
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
