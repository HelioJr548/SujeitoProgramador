import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Tab = createBottomTabNavigator();

export default function Routes() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarActiveTintColor: '#FFF',

				tabBarStyle: {
					backgroundColor: '#202225',
					borderTopWidth: 0,
				},
				// popToTopOnBlur: true, // NAVEGADOR TODO: Volta para a tela inicial do stack quando o tab perde o foco
			}}
		>
			<Tab.Screen
				name="HomeStack"
				component={StackRoutes}
				options={{
					tabBarIcon: ({ color, size }) => {
						return (
							<Feather name="home" color={color} size={size} />
						);
					},
					// Volta automaticamente para a tela inicial do StackRoutes (Home) quando o usuário sai deste tab
					// Útil para stacks com múltiplas telas - garante que sempre volte para "home" ao trocar de tab
					popToTopOnBlur: true,
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
					// Não tem popToTopOnBlur pois Contact é uma tela única (não um stack)
				}}
			/>

			<Tab.Screen
				name="Contact"
				component={Contact}
				options={{
					//headerShown: false,
					tabBarIcon: ({ color, size }) => {
						return (
							<Feather
								name="phone-call"
								color={color}
								size={size}
							/>
						);
					},
					// Não tem popToTopOnBlur pois Contact é uma tela única (não um stack)
				}}
			/>
		</Tab.Navigator>
	);
}
