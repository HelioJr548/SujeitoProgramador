import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="profile"
				options={{
					title: 'Perfil',
					headerStyle: {
						backgroundColor: '#121212',
					},
					headerTintColor: '#FFF',
				}}
			/>
			<Stack.Screen
				name="contatos"
				options={{
					title: 'Contatos',
				}}
			/>
		</Stack>
	);
}
