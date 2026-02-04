import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function List({ data, onLike }) {
	const loadIcon = (likeada) => {
		return likeada
			? require('../img/likeada.png')
			: require('../img/like.png');
	};

	const showLikes = (likers) => {
		if (likers === 0) {
			return;
		}

		return (
			<Text style={styles.likes}>
				{likers} {likers > 1 ? 'curtidas' : 'curtida'}
			</Text>
		);
	};

	return (
		<View>
			<View style={styles.viewPerfil}>
				<Image
					source={{ uri: data.imgPerfil }}
					style={styles.fotoPerfil}
				/>
				<Text style={styles.nomeUsuario}>{data.name}</Text>
			</View>

			<Image
				style={styles.fotoPubli}
				source={{ uri: data.imgPublicacao }}
			/>

			<View style={styles.areaBtn}>
				<Pressable onPress={onLike}>
					<Image
						source={loadIcon(data.likeada)}
						style={styles.icons}
					/>
				</Pressable>

				<Pressable>
					<Image
						source={require('../img/comment.png')}
						style={styles.icons}
					/>
				</Pressable>

				<Pressable>
					<Image
						source={require('../img/send.png')}
						style={styles.icons}
					/>
				</Pressable>
			</View>

			{showLikes(data.likers)}

			<View style={styles.areaBtn}>
				<Text style={styles.nomeRodape}>{data.name}</Text>
				<Text style={styles.descRodape}>{data.descricao}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	viewPerfil: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	fotoPerfil: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	nomeUsuario: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	fotoPubli: {
		width: '100%',
		height: 400,
		resizeMode: 'cover',
	},
	areaBtn: {
		flexDirection: 'row',
		alignItems: 'baseline',
		padding: 5,
		gap: 5,
	},
	icons: {
		width: 25,
		height: 25,
	},
	likes: {
		fontWeight: 'bold',
		marginLeft: 5,
	},
	nomeRodape: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingLeft: 5,
	},

	descRodape: {
		fontSize: 14,
		fontStyle: 'italic',
		width: '100%',
	},
});
