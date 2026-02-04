import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const [img, setimg] = useState(require('./src/biscoito.png'));
	const [textPhrase, setTextPhrase] = useState(
		'Quebre o biscoito para receber sua mensagem!'
	);

	const frasesBiscoito = [
		'A jornada de mil milhas começa com um único passo.',
		'Acredite que você pode e você já está no meio do caminho.',
		'Todo problema é uma oportunidade disfarçada.',
		'A paciência é amarga, mas seus frutos são doces.',
		'O conhecimento é poder, mas a coragem é a chave.',
		'Seja a mudança que você deseja ver no mundo.',
		'O sucesso é a soma de pequenos esforços repetidos.',
		'A maior glória não é cair, mas levantar toda vez que cair.',
		'O que semeia colhe, o que planta paciência colhe abundância.',
		'A felicidade não é destino, é uma maneira de viajar.',
		'Coragem não é ausência de medo, é ação apesar dele.',
		'O futuro pertence àqueles que acreditam na beleza dos sonhos.',
		'Não espere oportunidades, crie-as.',
		'A simplicidade é a sofisticação máxima.',
		'Grandes realizações vêm de pequenas ações diárias.',
		'A mente é tudo. O que você pensa, você se torna.',
		'O otimismo é a fé em ação. Nada se pode realizar sem esperança.',
		'A verdadeira força está na capacidade de recomeçar.',
		'Onde há grande amor, há sempre milagres.',
		'A vida é 10% o que acontece e 90% como você reage.',
	];

	function breakBiscuit() {
		const randomIndex = Math.floor(Math.random() * frasesBiscoito.length);

		setTextPhrase('');
		setimg(require('./src/biscoito.png'));
		setTimeout(() => {
			setTextPhrase(frasesBiscoito[randomIndex]);
			setimg(require('./src/biscoitoAberto.png'));
		}, 200);
	}

	return (
		<View style={styles.container}>
			<Image source={img} style={styles.img} />
			<Text style={styles.phraseStyle}>{textPhrase}</Text>

			<CustomPressable text="Quebrar biscoito" onPress={breakBiscuit} />

			<CustomPressable
				text="Reiniciar"
				onPress={() => {
					setimg(require('./src/biscoito.png'));
					setTextPhrase('');
				}}
			/>
		</View>
	);
}

const CustomPressable = ({ text, onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.button,
				styles.buttonText,
				pressed && styles.buttonPressed,
			]}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>{text}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: 250,
		height: 250,
	},
	phraseStyle: {
		fontSize: 20,
		color: '#dd7b22',
		margin: 30,
		fontStyle: 'italic',
		textAlign: 'center',
	},
	button: {
		borderColor: '#e8963a',
		borderWidth: 2,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 10,
		marginVertical: 10,
	},
	buttonPressed: {
		backgroundColor: '#c86a1f',
		transform: [{ scale: 1.05 }],
	},
	buttonText: {
		color: '#e8963a',
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center',
	},
});
