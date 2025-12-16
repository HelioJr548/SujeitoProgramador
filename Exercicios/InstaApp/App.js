import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from './src/Header';
import List from './src/List';

export default function App() {
	const [feed, setFeed] = useState([
		{
			id: 1,
			name: 'Helio Jr',
			descricao: 'BORA CODAR!!',
			imgPerfil:
				'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
			imgPublicacao:
				'https://sujeitoprogramador.com/instareact/foto1.png',
			likeada: true,
			likers: 10,
		},
		{
			id: 2,
			name: 'Matheus',
			descricao: 'Isso sim é ser raiz!!',
			imgPerfil:
				'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
			imgPublicacao:
				'https://sujeitoprogramador.com/instareact/foto2.png',
			likeada: false,
			likers: 5,
		},
		{
			id: 3,
			name: 'Lucas',
			descricao: 'Curtindo o domingo',
			imgPerfil:
				'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
			imgPublicacao:
				'https://sujeitoprogramador.com/instareact/foto3.png',
			likeada: false,
			likers: 3,
		},
		{
			id: 4,
			name: 'Davi',
			descricao: 'Nova skill aprendida hoje! 🚀',
			imgPerfil:
				'https://sujeitoprogramador.com/instareact/fotoPerfil4.png',
			imgPublicacao:
				'https://sujeitoprogramador.com/instareact/foto4.png',
			likeada: true,
			likers: 1,
		},
		{
			id: 5,
			name: 'Thiago',
			descricao: 'Por enquanto tudo tranquilo',
			imgPerfil:
				'https://sujeitoprogramador.com/instareact/fotoPerfil5.png',
			imgPublicacao:
				'https://sujeitoprogramador.com/instareact/foto5.png',
			likeada: false,
			likers: 32,
		},
	]);

	function handleLike(postId) {
		setFeed((prevFeed) =>
			prevFeed.map((post) =>
				post.id === postId
					? {
							...post,
							likeada: !post.likeada,
							likers: post.likeada
								? post.likers - 1
								: post.likers + 1,
					  }
					: post
			)
		);
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header />

			<FlatList
				showsHorizontalScrollIndicator={false}
				data={feed}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<List data={item} onLike={() => handleLike(item.id)} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 35,
		flex: 1,
	},
});
