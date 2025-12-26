import { Link, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Search() {
	const router = useRouter();
	function handleNavigate() {
		const id = '1231523513123';
		router.push(`/produto/${id}`);
	}

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

			<Pressable onPress={handleNavigate}>
				<Text>Ir para o produto 102030</Text>
			</Pressable>
		</View>
	);
}
