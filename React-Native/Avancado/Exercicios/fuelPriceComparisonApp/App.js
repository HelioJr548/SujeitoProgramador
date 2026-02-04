import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
	Alert,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import Detalhes from './src/Detalhes';

export default function App() {
	const [alcool, setAlcool] = useState('');
	const [gasolina, setGasolina] = useState('');
	const [modalVisible, setModalVisible] = useState(false);
	const [resultado, setResultado] = useState(null); // ← NOVA STATE

	const calcular = () => {
		const precoAlcool = parseFloat(alcool.replace(',', '.')) || 0;
		const precoGasolina = parseFloat(gasolina.replace(',', '.')) || 0;

		if (precoAlcool <= 0 || precoGasolina <= 0) {
			Alert.alert(
				'Erro',
				'Por favor, insira preços válidos (maiores que 0)'
			);
			return null;
		}

		const ratio = precoAlcool / precoGasolina;
		const mensagem =
			ratio < 0.7
				? '🟢 Compensa usar Álcool!'
				: '🔴 Compensa usar Gasolina!';

		return {
			alcool: precoAlcool,
			gasolina: precoGasolina,
			mensagem,
			ratio: ratio.toFixed(3),
		};
	};

	const abrirModal = () => {
		const resultadoCalculado = calcular();
		if (resultadoCalculado) {
			setResultado(resultadoCalculado); // ← SALVA O RESULTADO
			setModalVisible(true);
		}
	};

	const fecharModal = () => {
		setModalVisible(false);
		setResultado(null); // ← LIMPA O RESULTADO
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<View style={styles.content}>
				<Text style={styles.titulo}>
					Qual combustivel compensa mais?
				</Text>
				<Text style={styles.subtitulo}>
					(Álcool deve custar até 70% da gasolina)
				</Text>

				<View style={styles.infoContainer}>
					<View style={styles.precoContainer}>
						<Text style={styles.precoTexto}>Álcool (R$/litro)</Text>
						<TextInput
							style={styles.preco}
							placeholder="3,29"
							value={alcool}
							onChangeText={setAlcool}
							keyboardType="decimal-pad"
							placeholderTextColor="#999"
						/>
					</View>

					<View style={styles.precoContainer}>
						<Text style={styles.precoTexto}>
							Gasolina (R$/litro)
						</Text>
						<TextInput
							style={styles.preco}
							placeholder="4,92"
							value={gasolina}
							onChangeText={setGasolina}
							keyboardType="decimal-pad"
							placeholderTextColor="#999"
						/>
					</View>

					<Pressable
						style={styles.botaoCalcular}
						onPress={abrirModal}
					>
						<Text style={styles.botaoCalcularTexto}>
							🔢 Calcular
						</Text>
					</Pressable>
				</View>
			</View>

			<Modal
				visible={modalVisible}
				animationType="slide"
				onRequestClose={fecharModal}
				statusBarTranslucent={true}
			>
				<Detalhes fechar={fecharModal} data={resultado} />
			</Modal>

			<StatusBar style="light" />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1a1a1a',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 24,
		paddingTop: 60,
	},
	titulo: {
		color: '#FFF',
		fontSize: 28,
		fontWeight: '800',
		marginBottom: 8,
		textAlign: 'center',
		letterSpacing: 0.5,
	},
	subtitulo: {
		color: '#ccc',
		fontSize: 14,
		textAlign: 'center',
		marginBottom: 40,
		lineHeight: 20,
	},
	infoContainer: {
		width: '100%',
		gap: 24,
	},
	precoContainer: {
		gap: 8,
		width: '100%',
	},
	precoTexto: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: '600',
		letterSpacing: 0.3,
	},
	preco: {
		backgroundColor: '#FFF',
		borderRadius: 12,
		paddingHorizontal: 16,
		paddingVertical: 16,
		fontSize: 18,
		fontWeight: '500',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	botaoCalcular: {
		backgroundColor: '#f87f2e',
		alignItems: 'center',
		paddingVertical: 18,
		borderRadius: 12,
		shadowColor: '#f87f2e',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
	},
	botaoCalcularTexto: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: '700',
		letterSpacing: 0.5,
	},
});
