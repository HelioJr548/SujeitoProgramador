import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
				}}
			/>

			<AuthStack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerStyle: {
						backgroundColor: '#2861ff', // ✅ Cor sólida (sem alpha)
					},
					headerTintColor: '#fff',
					headerTitle: 'Criar conta', // ✅ Título descritivo
					headerBackTitleVisible: false,
					headerTitleStyle: {
						fontWeight: '600', // ✅ Tipografia premium
						fontSize: 17,
					},
					headerShadowVisible: false, // ✅ Sem sombra no iOS
				}}
			/>
		</AuthStack.Navigator>
	);
}

export default AuthRoutes;
