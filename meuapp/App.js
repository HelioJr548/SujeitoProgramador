import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import Detalhes from './src/Detalhes';

export default function App() {
	const [modalVisible, setModalVisible] = useState(false);

	const abrirModal = () => setModalVisible(true);

	const fecharModal = () => setModalVisible(false);

	return (
		<View style={styles.container}>
			<Button title="Acessar" onPress={abrirModal} />

			<Modal
				visible={modalVisible}
				animationType="slide"
				transparent={true}
			>
				<Detalhes fechar={fecharModal} />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
