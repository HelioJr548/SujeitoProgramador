import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/Feather';
const AppDrawer = createDrawerNavigator();

function AppRoutes() {
	return (
		<AppDrawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				headerShown: false,
				drawerStyle: {
					backgroundColor: '#f8fafc', // ✅ Consistente com CustomDrawer
					width: 280,
				},
				drawerItemStyle: {
					marginVertical: 4, // ✅ Mais espaçamento
					borderRadius: 12,
					marginHorizontal: 16,
				},
				drawerActiveTintColor: '#ffffff',
				drawerActiveBackgroundColor: '#6366f1', // ✅ Roxo premium
				drawerInactiveTintColor: '#64748b',
				drawerInactiveBackgroundColor: 'transparent', // ✅ Sem fundo inativo
			}}
		>
			<AppDrawer.Screen
				name="Home"
				component={Home}
				options={{
					drawerIcon: ({ color }) => (
						<Icon name="home" size={22} color={color} />
					),
				}}
			/>
			<AppDrawer.Screen
				name="Registrar"
				component={New}
				options={{
					drawerIcon: ({ color }) => (
						<Icon name="plus" size={22} color={color} />
					),
				}}
			/>
			<AppDrawer.Screen
				name="Perfil"
				component={Profile}
				options={{
					drawerIcon: ({ color }) => (
						<Icon name="user" size={22} color={color} />
					),
				}}
			/>
		</AppDrawer.Navigator>
	);
}

export default AppRoutes;
