import { Image, Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function App() {
	const [photo, setPhoto] = useState(null);

	const openAlbum = async () => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!permissionResult.granted) {
			Alert.alert(
				'Permissão negada',
				'Permita acesso à galeria para selecionar fotos'
			);
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images', 'videos'],
			selectionLimit: 3,
			// allowsEditing: true,
			// aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setPhoto(result.assets[0].uri);
			console.log('Foto selecionada:', result.assets[0].uri);
		} else {
			console.log('Seleção cancelada');
		}
	};

	const openCamera = async () => {
		const permissionResult =
			await ImagePicker.requestCameraPermissionsAsync();

		if (!permissionResult.granted) {
			Alert.alert('Permissão negada', 'Permita acesso à câmera');
			return;
		}

		const result = await ImagePicker.launchCameraAsync({
			mediaTypes: ['images', 'videos'],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setPhoto(result.assets[0].uri);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Selecione uma foto</Text>

			<View style={styles.buttons}>
				<Pressable style={styles.button} onPress={openAlbum}>
					<Text style={styles.text}>📸 Galeria</Text>
				</Pressable>

				<Pressable style={styles.button} onPress={openCamera}>
					<Text style={styles.text}>📷 Câmera</Text>
				</Pressable>
			</View>

			{photo && (
				<View style={styles.imageContainer}>
					<Image source={{ uri: photo }} style={styles.image} />
					<Pressable
						style={styles.removeButton}
						onPress={() => setPhoto(null)}
					>
						<Text style={styles.removeText}>❌ Remover</Text>
					</Pressable>
				</View>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 40,
		marginTop: 20,
	},
	buttons: {
		flexDirection: 'row',
		gap: 16,
		marginBottom: 40,
	},
	button: {
		backgroundColor: '#121212',
		paddingVertical: 16,
		paddingHorizontal: 24,
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 8,
		elevation: 5,
	},
	text: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: '600',
		textAlign: 'center',
	},
	imageContainer: {
		width: '100%',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 300,
		borderRadius: 16,
		resizeMode: 'cover',
	},
	removeButton: {
		backgroundColor: '#ff4444',
		paddingHorizontal: 24,
		paddingVertical: 12,
		borderRadius: 12,
		marginTop: 16,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 4,
	},
	removeText: {
		color: '#FFF',
		fontWeight: '600',
		textAlign: 'center',
	},
});
