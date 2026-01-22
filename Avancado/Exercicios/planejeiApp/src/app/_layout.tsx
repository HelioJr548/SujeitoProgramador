import { router, Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
	useEffect(() => {
		const signed = false;
		// Multiple fallbacks for maximum compatibility
		const navigate = () => {
			if (!signed) router.replace('/(auth)/signin/page');
			else router.replace('/(panel)/home/page');
		};

		// Try immediate, fallback to RAF
		if (typeof requestAnimationFrame === 'undefined') {
			setTimeout(navigate, 0);
		} else {
			requestAnimationFrame(navigate);
		}
	}, []);

	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			<Stack.Screen name="(panel)" options={{ headerShown: false }} />
		</Stack>
	);
}
