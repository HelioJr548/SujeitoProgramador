import { Button, Image, StyleSheet, Text, View } from 'react-native';
import api from './services/api';
import { useEffect, useState } from 'react';

interface IGameProp {
	title: string;
	image_url: string;
}

export default function Game() {
	const [game, setGame] = useState<IGameProp | null>(null);
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		async function fetchGame() {
			try {
				const { data } = await api.get('/next-api/?api=game&id=15');

				setGame({
					title: data.title,
					image_url: data.image_url,
				});
			} catch (error) {
				setErrorMsg('Erro ao buscar dados');
			}
		}

		fetchGame();
	}, []);

	async function handleFetchGame() {
		try {
			const { data } = await api.get('/next-api/?api=game&id=2');
			setGame({
				title: data.title,
				image_url: data.image_url,
			});
		} catch (error) {
			setErrorMsg('Erro ao buscar dados');
		}
	}

	return (
		<View style={styles.container}>
			{game && (
				<>
					<Image
						testID="avatarGame"
						source={{ uri: game.image_url }}
						style={{ width: 70, height: 70, borderRadius: 99 }}
					/>
					<Text>{game.title}</Text>
				</>
			)}

			<Button title="Mudar game" onPress={handleFetchGame} />

			{errorMsg !== '' && <Text>{errorMsg}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 24,
		gap: 8,
		alignItems: 'center',
	},
});
