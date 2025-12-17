import Feather from '@expo/vector-icons/Feather';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Drawer = createDrawerNavigator();

export default function Routes() {
	return (
		<Drawer.Navigator>
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
