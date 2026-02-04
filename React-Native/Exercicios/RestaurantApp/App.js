import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState('');
	const maxCapacity = 20;

	const isFull = count === maxCapacity;
	const isEmpty = count === 0;

	const handleEnter = () => {
		if (!isFull) {
			setCount(count + 1);
			setText('');
		} else {
			setText('Lotado!');
		}
	};

	const handleExit = () => {
		if (!isEmpty) {
			setCount(count - 1);
			setText('');
		} else {
			setText('O restaurante já está vazio!');
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.title}>Pessoas no restaurante:</Text>

			<View style={styles.counterContainer}>
				<Text style={styles.counterTxt}>{count}</Text>
				<Text style={styles.capacityTxt}>/{maxCapacity}</Text>
			</View>

			<Text style={styles.statusText}>{text}</Text>

			<View style={styles.buttonContainer}>
				<CustomPressable
					onPress={handleEnter}
					text="Entrar"
					disabled={isFull}
					styleBtn={styles.enterBtn}
					styleTxt={styles.styleTxt}
				/>
				<CustomPressable
					onPress={handleExit}
					text="Sair"
					disabled={isEmpty}
					styleBtn={styles.exitBtn}
					styleTxt={styles.styleTxt}
				/>
			</View>

			<Text style={styles.occupancy}>
				{Math.round((count / maxCapacity) * 100)}% ocupado
			</Text>
		</View>
	);
}

const CustomPressable = ({ onPress, text, disabled, styleBtn, styleTxt }) => {
	return (
		<Pressable
			onPress={onPress}
			style={[styleBtn, disabled && styles.disabledBtn]}
			disabled={disabled}
		>
			<Text style={styleTxt}>{text}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'hsla(0, 0%, 100%, 1.00)',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	counterContainer: {
		margin: 20,
		padding: 30,
		backgroundColor: 'hsla(210, 100%, 50%, 0.8)',
		borderRadius: 20,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
	},
	counterTxt: {
		fontSize: 64,
		fontWeight: 'bold',
		color: 'hsla(0, 0%, 100%, 1.00)',
	},
	capacityTxt: {
		fontSize: 24,
		color: 'hsla(0, 0%, 100%, 0.9)',
	},
	statusText: {
		fontSize: 20,
		color: 'red',
		fontWeight: '500',
		marginBottom: 30,
		minHeight: 24,
	},
	buttonContainer: {
		flexDirection: 'row',
		gap: 20,
		marginBottom: 30,
	},
	enterBtn: {
		backgroundColor: 'hsla(120, 70%, 40%, 1)',
		padding: 15,
		borderRadius: 10,
		minWidth: 100,
	},
	exitBtn: {
		backgroundColor: 'hsla(0, 70%, 50%, 1)',
		padding: 15,
		borderRadius: 10,
		minWidth: 100,
	},
	styleTxt: {
		color: 'hsla(0, 0%, 100%, 1.00)',
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center',
	},
	disabledBtn: {
		backgroundColor: 'hsla(0, 0%, 60%, 1)',
	},
	occupancy: {
		fontSize: 20,
		color: 'hsla(210, 100%, 30%, 0.8)',
		fontWeight: '500',
	},
});
