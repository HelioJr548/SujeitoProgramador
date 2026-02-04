import { Pressable, StyleSheet, Text, View } from 'react-native';

const Detalhes = ({ fechar, data }) => {
	if (!data) return null;

	const corMensagem = data.ratio < 0.7 ? '#00ff88' : '#ff4444';

	return (
		<View style={styles.overlay}>
			<View style={styles.content}>
				{/* Título principal */}
				<Text style={[styles.mensagem, { color: corMensagem }]}>
					{data.mensagem}
				</Text>

				{/* Card com preços */}
				<View style={styles.card}>
					<Text style={styles.cardTitulo}>Preços informados:</Text>

					<View style={styles.precosRow}>
						<View style={styles.precoItem}>
							<Text style={styles.label}>Álcool</Text>
							<Text style={styles.valor}>
								R$ {data.alcool.toFixed(2)}
							</Text>
						</View>
						<View style={styles.divisor} />
						<View style={styles.precoItem}>
							<Text style={styles.label}>Gasolina</Text>
							<Text style={styles.valor}>
								R$ {data.gasolina.toFixed(2)}
							</Text>
						</View>
					</View>

					{/* Razão do cálculo */}
					<View style={styles.ratioContainer}>
						<Text style={styles.ratioLabel}>
							Razão (Álcool ÷ Gasolina)
						</Text>
						<Text style={styles.ratioValor}>{data.ratio}</Text>
						<Text style={styles.ratioStatus}>
							{data.ratio < 0.7
								? '✅ Menor que 0.70 (Álcool compensa)'
								: '❌ Maior que 0.70 (Gasolina compensa)'}
						</Text>
					</View>
				</View>

				{/* Botão fechar */}
				<Pressable onPress={fechar} style={styles.botao}>
					<Text style={styles.botaoText}>🔄 Calcular novamente</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: '#1a1a1a',
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		width: '100%',
		maxWidth: 420,
		paddingHorizontal: 24,
		paddingVertical: 60,
	},
	mensagem: {
		fontSize: 32,
		fontWeight: '800',
		textAlign: 'center',
		marginBottom: 36,
		letterSpacing: 0.5,
	},
	card: {
		backgroundColor: 'rgba(255, 255, 255, 0.08)',
		borderRadius: 20,
		padding: 28,
		marginBottom: 32,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 12 },
		shadowOpacity: 0.25,
		shadowRadius: 20,
		elevation: 16,
	},
	cardTitulo: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: '700',
		textAlign: 'center',
		marginBottom: 28,
		letterSpacing: 0.3,
	},
	precosRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 28,
	},
	precoItem: {
		flex: 1,
		alignItems: 'center',
	},
	divisor: {
		width: 1,
		height: 50,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
	},
	label: {
		color: '#ccc',
		fontSize: 15,
		marginBottom: 6,
		fontWeight: '500',
		textAlign: 'center',
	},
	valor: {
		color: '#FFF',
		fontSize: 24,
		fontWeight: '800',
		textAlign: 'center',
	},
	ratioContainer: {
		alignItems: 'center',
		paddingTop: 20,
		borderTopWidth: 1,
		borderTopColor: 'rgba(255, 255, 255, 0.15)',
	},
	ratioLabel: {
		color: '#FFF',
		fontSize: 15,
		marginBottom: 8,
		textAlign: 'center',
	},
	ratioValor: {
		color: '#f87f2e',
		fontSize: 36,
		fontWeight: '900',
		marginBottom: 12,
		textAlign: 'center',
	},
	ratioStatus: {
		color: '#ddd',
		fontSize: 16,
		textAlign: 'center',
		lineHeight: 22,
	},
	botao: {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderWidth: 2,
		borderColor: '#f87f2e',
		borderRadius: 16,
		alignItems: 'center',
		paddingVertical: 18,
		width: '100%',
	},
	botaoText: {
		color: '#f87f2e',
		fontSize: 18,
		fontWeight: '700',
		letterSpacing: 0.5,
	},
});

export default Detalhes;
