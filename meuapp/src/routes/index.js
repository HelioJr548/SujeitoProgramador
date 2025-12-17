import Feather from '@expo/vector-icons/Feather';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Drawer = createDrawerNavigator();

export default function Routes() {
	return (
		<Drawer.Navigator
			screenOptions={{
				// headerShown: false,
				drawerStyle: {
					backgroundColor: 'hsla(0, 0%, 7%, 1.00)',
				},
				drawerActiveBackgroundColor: 'hsla(239, 53%, 49%, 1.00)',
				drawerActiveTintColor: 'hsla(0, 0%, 100%, 1.00)',
				drawerInactiveBackgroundColor: 'hsla(0, 0%, 80%, 1.00)',
				drawerInactiveTintColor: 'hsla(0, 0%, 0%, 1.00)',
			}}
		>
			<Drawer.Screen name="HomeStack" component={StackRoutes} />
			<Drawer.Screen
				name="About"
				component={About}
				options={{ title: 'Sobre' }}
			/>
			<Drawer.Screen
				name="Contact"
				component={Contact}
				options={{ title: 'Contatos' }}
			/>
		</Drawer.Navigator>
	);
}
