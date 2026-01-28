import useProfile from '@/src/hooks/useProfile';
import { Button, Text, View } from 'react-native';

export default function Profile() {
	const { logout } = useProfile();

	return (
		<View>
			<Text>Página Perfil</Text>
			<Button title="Sair" onPress={logout} />
		</View>
	);
}
