import { useContext } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function Home() {
	const { signOut, user } = useContext(AuthContext);

	return (
		<View>
			<Text>Home</Text>
			<Text>User: {user.name}</Text>

			<Button title="Sair da Conta" onPress={() => signOut()} />
		</View>
	);
}
