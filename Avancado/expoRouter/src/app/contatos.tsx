import { Link, router } from 'expo-router';
// import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Profile() {
	// const router = useRouter();

	function handleNavigate() {
		router.push('/profile');
	}

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Contatos</Text>

			<Pressable onPress={handleNavigate}>
				<Text>Ir para perfil</Text>
			</Pressable>

			<Link href={'/(tabs)/produtos'}>Ir para Produtos</Link>
		</View>
	);
}
