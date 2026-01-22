import { Stack } from 'expo-router';

export default function AuthLayout() {
	return (
		<Stack>
			<Stack.Screen name="home/page" options={{ headerShown: false }} />
		</Stack>
	);
}
