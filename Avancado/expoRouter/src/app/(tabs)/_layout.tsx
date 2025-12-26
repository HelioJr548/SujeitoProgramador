import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function TabsLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused, size, color }) => {
						return (
							<Feather name="home" size={size} color={color} />
						);
					},
				}}
			/>
			<Tabs.Screen
				name="produtos"
				options={{
					headerShown: false,
					tabBarLabel: 'Produtos',
					tabBarIcon: ({ focused, size, color }) => {
						return (
							<Feather
								name="shopping-bag"
								size={size}
								color={color}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="search/index"
				options={{
					headerShown: false,
					tabBarLabel: 'Buscar',
					tabBarIcon: ({ focused, size, color }) => {
						return (
							<Feather name="search" size={size} color={color} />
						);
					},
				}}
			/>
		</Tabs>
	);
}
