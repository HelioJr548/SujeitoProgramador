import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import {
	Keyboard,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
	Alert,
	ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient'; // npm install expo-linear-gradient
import api from './src/services/api';

export default function App() {
	const [cep, setCep] = useState('');
	const inputRef = useRef(null);
	const [cepUser, setCepUser] = useState(null);
	const [loading, setLoading] = useState(false);

	const limpar = () => {
		setCep('');
		setCepUser(null);
		inputRef.current?.focus();
	};

	const buscar = async () => {
		if (cep.length !== 8 || !/^\d{8}$/.test(cep)) {
			Alert.alert('Erro', 'Digite um CEP válido (8 dígitos)');
			setCep('');
			inputRef.current?.focus();
			return;
		}

		setLoading(true);
		try {
			const { data } = await api.get(`${cep}/json`);
			if (data.erro) {
				Alert.alert('Erro', 'CEP não encontrado');
				return;
			}
			setCepUser(data);
			Keyboard.dismiss();
		} catch (error) {
			Alert.alert(
				'Erro de conexão',
				error.response?.data?.message ||
					'Verifique sua conexão com a internet'
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<LinearGradient
			colors={['#667eea', '#764ba2']}
			style={styles.container}
		>
			<SafeAreaView style={styles.safeArea}>
				<ScrollView contentContainerStyle={styles.scrollContent}>
					{/* Header */}
					<View style={styles.header}>
						<Text style={styles.title}>📍 Busca CEP</Text>
						<Text style={styles.subtitle}>
							Encontre endereços rapidamente
						</Text>
					</View>

					{/* Input Section */}
					<View style={styles.inputCard}>
						<Text style={styles.label}>Digite o CEP</Text>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								placeholder="Ex: 79003-241"
								value={cep}
								onChangeText={setCep}
								keyboardType="numeric"
								maxLength={9}
								ref={inputRef}
								placeholderTextColor="#999"
							/>
						</View>
					</View>

					{/* Buttons */}
					<View style={styles.buttonsContainer}>
						<Pressable
							style={[
								styles.button,
								styles.primaryButton,
								loading && styles.disabled,
							]}
							onPress={buscar}
							disabled={loading}
						>
							<Text style={styles.buttonText}>
								{loading ? '🔄 Buscando...' : '🔍 Buscar'}
							</Text>
						</Pressable>

						<Pressable
							style={[styles.button, styles.secondaryButton]}
							onPress={limpar}
							disabled={loading}
						>
							<Text style={styles.secondaryButtonText}>
								🗑️ Limpar
							</Text>
						</Pressable>
					</View>

					{/* Result Card */}
					{cepUser && (
						<View style={styles.resultCard}>
							<Text style={styles.resultTitle}>
								📋 Endereço Encontrado
							</Text>
							<View style={styles.infoRow}>
								<Text style={styles.infoLabel}>CEP:</Text>
								<Text style={styles.infoValue}>
									{cepUser.cep}
								</Text>
							</View>
							<View style={styles.infoRow}>
								<Text style={styles.infoLabel}>
									Logradouro:
								</Text>
								<Text style={styles.infoValue}>
									{cepUser.logradouro}
								</Text>
							</View>
							<View style={styles.infoRow}>
								<Text style={styles.infoLabel}>Bairro:</Text>
								<Text style={styles.infoValue}>
									{cepUser.bairro}
								</Text>
							</View>
							<View style={styles.infoRow}>
								<Text style={styles.infoLabel}>Cidade:</Text>
								<Text style={styles.infoValue}>
									{cepUser.localidade}
								</Text>
							</View>
							<View style={styles.infoRow}>
								<Text style={styles.infoLabel}>Estado:</Text>
								<Text style={styles.infoValue}>
									{cepUser.uf || cepUser.estado}
								</Text>
							</View>
						</View>
					)}
				</ScrollView>
			</SafeAreaView>
			<StatusBar style="light" />
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	safeArea: {
		flex: 1,
	},
	scrollContent: {
		flexGrow: 1,
		padding: 24,
		paddingBottom: 40,
	},
	header: {
		alignItems: 'center',
		marginBottom: 40,
		marginTop: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: 'rgba(255,255,255,0.8)',
		textAlign: 'center',
	},
	inputCard: {
		backgroundColor: 'rgba(255,255,255,0.95)',
		borderRadius: 20,
		padding: 24,
		marginBottom: 24,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.1,
		shadowRadius: 20,
		elevation: 10,
	},
	label: {
		fontSize: 16,
		fontWeight: '600',
		color: '#333',
		marginBottom: 12,
	},
	inputContainer: {
		backgroundColor: 'white',
		borderRadius: 12,
		paddingHorizontal: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 3,
	},
	input: {
		fontSize: 18,
		color: '#333',
		paddingVertical: 16,
		height: 56,
	},
	buttonsContainer: {
		flexDirection: 'row',
		gap: 16,
		marginBottom: 24,
	},
	button: {
		flex: 1,
		paddingVertical: 16,
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 12,
		elevation: 8,
	},
	primaryButton: {
		backgroundColor: '#4F46E5',
	},
	secondaryButton: {
		backgroundColor: 'rgba(255, 255, 255, 0.18)',
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
	secondaryButtonText: {
		fontSize: 18,
		fontWeight: '600',
		color: '#fff',
	},
	disabled: {
		opacity: 0.7,
	},
	resultCard: {
		backgroundColor: 'rgba(255,255,255,0.95)',
		borderRadius: 20,
		padding: 24,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.15,
		shadowRadius: 20,
		elevation: 12,
		flex: 1,
	},
	resultTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 20,
		textAlign: 'center',
	},
	infoRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.05)',
	},
	infoLabel: {
		fontSize: 16,
		color: '#666',
		fontWeight: '500',
	},
	infoValue: {
		fontSize: 16,
		color: '#333',
		fontWeight: '600',
		flexShrink: 1,
		textAlign: 'right',
	},
});
