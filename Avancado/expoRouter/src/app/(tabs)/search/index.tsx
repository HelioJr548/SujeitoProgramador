import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Search() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Pagina Buscar</Text>

			<Link
				href={{ pathname: '/produto/[id]', params: { id: '456746' } }}
			>
				Ir para o Produto 456746
			</Link>
		</View>
	);
}
