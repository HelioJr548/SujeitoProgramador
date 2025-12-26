import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Edit app/index.tsx to edit this screen.</Text>
			<Link href={'/profile'}>Ir para o perfil</Link>
			<Link href={'/contatos'}>Ir para o contatos</Link>
		</View>
	);
}
