import Feather from '@expo/vector-icons/Feather';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import About from '../pages/About';
import Contact from '../pages/Contact';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes() {
	return (
		<Drawer.Navigator
			drawerContent={CustomDrawer}
			screenOptions={{
				drawerActiveBackgroundColor: '#00dae4',
				drawerActiveTintColor: 'hsla(0, 0%, 100%, 1.00)',
				drawerInactiveBackgroundColor: '#f1f1f1',
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
